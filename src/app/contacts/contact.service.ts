import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { IContact } from './contact';

@Injectable()
export class ContactService {
  private API: string = 'api/contacts';


  constructor(private http: HttpClient) { }

  getContacts(): Observable<IContact[]> {
    return (
      this.http
        .get<IContact[]>(this.API)
        .do(contacs => console.log('getContacts: ' + JSON.stringify(contacs)))
        .catch(this.handleError)
    );
  }

  getContact(id: number): Observable<IContact> {
    return (
      this.http
        .get<IContact[]>(`${this.API}/${id}`)
        .do(contact => console.log('getContact: ' + JSON.stringify(contact)))
        .catch(this.handleError)
    );
  }

  saveContact(contact: IContact): Observable<IContact> {
    return (
      this.http
        .post<IContact>(this.API, contact)
        .do(contact => console.log('createContact: ' + JSON.stringify(contact)))
        .catch(this.handleError)
    );
  }

  editContact(contact: IContact): Observable<IContact> {
    return (
      this.http
        .put<IContact>(this.API, contact)
        .do(contact => console.log('updateContact: ' + JSON.stringify(contact)))
        .catch(this.handleError)
    );
  }

  deleteContact(id: number): Observable<null> {
    return (
      this.http
        .delete(`${this.API}/${id}`)
        .catch(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof Error) {
          errorMessage = `An error occurred: ${err.error.message}`;
      } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      return Observable.throw(errorMessage);
  }
}
