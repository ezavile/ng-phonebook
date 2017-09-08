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
    private contacts: IContact[] = [
      {
        'id': 1,
        'firstname': 'Isaiah',
        'lastname': 'Hawkins',
        'address': {
          'street': '1684 W Craig Rd',
          'city': 'Saltillo',
          'state': 'COA',
          'zipcode': '25096'
        },
        'email': 'isaiah@example.com',
        'phone': '(656)-123-4567',
        'kinship': 'home'
      },
      {
        'id': 2,
        'firstname': 'Romina',
        'lastname': 'hoogmoed',
        'address': {
          'street': '1861 jan pieterszoon coenstraat',
          'city': 'Chihuahua',
          'state': 'CH',
          'zipcode': '12345'
        },
        'email': 'romain.hoogmoed@example.com',
        'phone': '(656)-976-4980',
        'kinship': 'heart'
      },
      {
        'id': 3,
        'firstname': 'Aaron',
        'lastname': 'Burns',
        'address': {
          'street': '5971 Shelley St',
          'city': 'Monterrey',
          'state': 'NL',
          'zipcode': '78912'
        },
        'email': 'aaron.burns38@example.com',
        'phone': '(501)-245-5193',
        'kinship': 'glass'
      },
      {
        'id': 4,
        'firstname': 'Manuel',
        'lastname': 'Larson',
        'address': {
          'street': '7188 Walnut Hill Ln',
          'city': 'Guadalajara',
          'state': 'JAL',
          'zipcode': '78912'
        },
        'email': 'manuel.larson86@example.com',
        'phone': '(968)-539-3568',
        'kinship': 'lock'
      }
    ];


    constructor(private http: HttpClient) { }

    getContacts(): Observable<IContact[]> {
        // return (
        //   this.http
        //     .get<IContact[]>(this.API)
        //     .delay(3000)
        //     .catch(this.handleError)
        // );
        return Observable.of(this.contacts).delay(3000);
    }

    getContact(id: number): Observable<IContact> {
      const contact: IContact = this.contacts.find((c) => c.id === id);
      return Observable.of(contact).delay(3000);
    }

    saveProduct(contact: IContact): Observable<IContact> {
      // return (
      //   this.http
      //     .post<IContact>(this.API, contact)
      //     .do(data => console.log('createProduct: ' + JSON.stringify(data)))
      //     .catch(this.handleError)
      // );
      contact.id = this.contacts.length + 1;
      this.contacts.push(contact);
      return Observable.of(contact);
    }

    editProduct(contact: IContact): Observable<IContact> {
      this.contacts = this.contacts.map(c => c.id === contact.id ? contact : c );
      return Observable.of(contact);
    }

    deleteProduct(id: number): Observable<IContact[]> {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      return Observable.of(this.contacts);
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
