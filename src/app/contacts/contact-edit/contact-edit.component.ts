import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IContact } from '../contact';
import { ContactService } from '../contact.service';
import { IContactForm } from '../shared/contact-form/contact-form';

@Component({
  selector: 'pb-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.styl']
})
export class ContactEditComponent implements OnInit, IContactForm {
  contactId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.contactId = +params['id'];
      }
    );
  }

  onSave(contact: IContact) {
    this.contactService
      .editProduct(contact)
      .subscribe(
        contact => {
          console.log(contact);
          this.router.navigate(['/contacts']);
        },
        error => console.log(error)
      );
  }
}
