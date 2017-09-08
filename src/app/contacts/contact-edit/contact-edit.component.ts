import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IContact } from '../contact';
import { ContactService } from '../contact.service';
import { IContactForm } from '../shared/contact-form/contact-form';

@Component({
  selector: 'pb-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.styl']
})
export class ContactEditComponent implements OnInit, IContactForm {

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {}

  onSave(contact: IContact) {
    this.contactService
      .editContact(contact)
      .subscribe(
        contact => {
          console.log(contact);
          this.router.navigate(['/contacts']);
        },
        error => console.log(error)
      );
  }
}
