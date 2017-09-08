import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

import { IContact } from '../contact';
import { ContactService } from '../contact.service';
import { IContactForm } from '../shared/contact-form/contact-form';

@Component({
  selector: 'pb-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.styl']
})
export class ContactAddComponent implements OnInit, IContactForm {
  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {}

  onSave(contact: IContact) {
    this.contactService
      .saveContact(contact)
      .subscribe(
        contact => {
          console.log(contact);
          this.router.navigate(['/contacts']);
        },
        error => console.log(error)
      );
  }

}
