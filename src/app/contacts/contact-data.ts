import { InMemoryDbService, ResponseOptions, } from 'angular-in-memory-web-api';

import { IContact } from './contact';

export class ContactData implements InMemoryDbService {
  createDb() {
    const contacts: IContact[] = [
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
    return { contacts };
  }

  responseInterceptor(responseOptions: any): any {
    const responseBody = responseOptions.body ? responseOptions.body.data : responseOptions.body;
    responseOptions.body = responseBody;
    return responseOptions;
  }
}
