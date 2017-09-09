import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


import { IContact } from './contact';
import { ContactService } from './contact.service';

@Injectable()
export class ContactsResolver implements Resolve<IContact[]> {

  constructor(
    private contactServie: ContactService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IContact[]> {
    return (
      this.contactServie
        .getContacts()
        .do((contacts) => {
          return contacts;
        })
        .catch(
          error => {
            console.log(`Retrieval error: ${error}`);
            this.router.navigate(['/home']);
            return Observable.of(null);
          }
        )
    );
  }
}
