import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';
import { IContact } from '../contact';

@Component({
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.styl']
})
export class ContactsListComponent implements OnInit {
  whereIsItfrom: string;
  contacts: IContact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService
      .getContacts()
      .subscribe(
        contacts => {
          this.contacts = contacts;
        },
        error => console.log(error)
      );
  }

  onIcoClicked(message: string): void {
    this.whereIsItfrom = message;
  }

}
