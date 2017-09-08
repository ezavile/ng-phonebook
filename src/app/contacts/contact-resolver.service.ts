import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


import { IContact } from './contact';
import { ContactService } from './contact.service';

@Injectable()
export class ContactResolver implements Resolve<IContact> {

  constructor(
    private contactServie: ContactService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IContact> {
    const id = route.params['id'];

    if (isNaN(id)) {
      console.log(`Contact id was not a number: ${id}`);
      this.router.navigate(['/contacts']);
    }

    return (
      this.contactServie
        .getContact(+id)
        .map(
          contact => {
            if (contact) {
              return contact;
            }
            console.log(`Contact was not found: ${id}`);
            this.router.navigate(['/contacts']);
            return null;
          }
        )
        .catch(
          error => {
            console.log(`Retrieval error: ${error}`);
            this.router.navigate(['/contacts']);
            return Observable.of(null);
          }
        )
    );
  }
}
