import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';
import { IContact } from '../contact';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.styl']
})
export class ContactListComponent implements OnInit {
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
        this.buildContacts(contacts);
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

  onDelete(id: number): void {
    this.contactService
      .deleteProduct(id)
      .subscribe(
        contacts => {
          this.buildContacts(contacts);
        },
        error => console.log(error)
      );
  }

  private buildContacts(contacts: IContact[]): void {
    this.contacts = contacts;
    this.filteredContacts = this.contacts;
  }
}
