import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IContact } from '../../../contact';

@Component({
  selector: 'pb-contact-form-address',
  templateUrl: './contact-form-address.component.html',
  styleUrls: ['./contact-form-address.component.styl']
})
export class ContactFormAddressComponent implements OnInit {
  form: FormGroup;
  contact: IContact;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zipcode: ''
      }),
    });

    this.route.parent.data.subscribe(
      data => {
        this.contact = data['contact'];
        if (this.contact) {
          this.form.patchValue(this.contact);
        }
      }
    );
  }

  ngOnInit() {}

}
