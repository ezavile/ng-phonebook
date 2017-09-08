import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {
    const contacts: IContact[] = this.route.snapshot.data['contacts'];
    this.buildContacts(contacts);
  }

  ngOnInit() {}

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
      .deleteContact(id)
      .subscribe(() => {
          const contacts = this.contacts.filter(contact => contact.id !== id);
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
