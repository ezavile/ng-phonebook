import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', Validators.required],
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zipcode: ''
      }),
      email: '',
      phone: ['', Validators.required],
      kindship: 'home'
    });
  }

}
