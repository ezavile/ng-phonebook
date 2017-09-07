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
  filteredContacts: IContact[];
  filterBy: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService
    .getContacts()
    .subscribe(
      contacts => {
        this.contacts = contacts;
        this.filteredContacts = this.contacts;
      },
      error => console.log(error)
    );
  }

  onIcoClicked(message: string): void {
    this.whereIsItfrom = message;
  }

  doFilter(name: string): void {
    name = name.toLocaleLowerCase();
    this.filteredContacts = this.contacts.filter((contact: IContact) => {
      return contact.firstname.toLocaleLowerCase().includes(name);
    });
  }
}
