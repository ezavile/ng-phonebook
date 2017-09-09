import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IContact } from '../../contact';
import { ContactFormInfoComponent } from './contact-form-info/contact-form-info.component';
import { ContactFormAddressComponent } from './contact-form-address/contact-form-address.component';

@Component({
  selector: 'pb-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.styl']
})
export class ContactFormComponent implements OnInit {
  @Output() contact: EventEmitter<IContact> = new EventEmitter<IContact>();
  contactForm: FormGroup;
  contactInfoForm: FormGroup = new FormGroup({});
  contactAddressForm: FormGroup = new FormGroup({});
  contactLoaded: IContact;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contactLoaded = this.route.snapshot.data['contact'];
  }

  onActivate(component: ContactFormInfoComponent | ContactFormAddressComponent): void {
    if (component instanceof ContactFormInfoComponent) {
      this.contactInfoForm = component.form;
    }
    if (component instanceof ContactFormAddressComponent) {
      this.contactAddressForm = component.form;
    }
    this.contactForm = component.form;
  }

  onDeactivate(component: ContactFormInfoComponent | ContactFormAddressComponent): void {
    this.contactLoaded = {...this.contactLoaded, ...component.form.value};
    this.route.snapshot.data['contact'] = {...this.contactLoaded};
  }

  saveContact(): void {
    if (this.contactInfoForm.valid && this.contactAddressForm.valid) {
      this.contact.emit(<IContact>{...this.contactLoaded, ...this.contactForm.value});
    }
  }

}
