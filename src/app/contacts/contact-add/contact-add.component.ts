import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pb-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.styl']
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstname: '',
      lastname: '',
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zipcode: ''
      }),
      email: '',
      phone: '',
      kindship: 'home'
    });
  }

}
