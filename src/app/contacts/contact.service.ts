import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { IContact } from './contact';

@Injectable()
export class ContactService {
    private API = './api/contacts.json';

    constructor(private http: HttpClient) { }

    getContacts(): Observable<IContact[]> {
        return (
          this.http
            .get<IContact[]>(this.API)
            .delay(3000)
            .catch(this.handleError)
        );
    }

    saveProduct(contact: IContact): Observable<IContact> {
      // return (
      //   this.http
      //     .post<IContact>(this.API, contact)
      //     .do(data => console.log('createProduct: ' + JSON.stringify(data)))
      //     .catch(this.handleError)
      // );
      return Observable.of(contact);
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
