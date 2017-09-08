import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

function dontMensoWordValidation(c: AbstractControl): {[key: string]: boolean} | null {
  if (c.value.toLowerCase().includes('menso')) {
    return { 'dontMensoWord': true };
  }
  return null;
}

function dontMentionItValidation(word: string): ValidatorFn {
  return (c: AbstractControl): {[key: string]: boolean} | null => {
    if (c.value.toLowerCase().includes(word)) {
      return { 'dontMentionIt': true };
    }
    return null;
  };
}

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
      firstname: ['', [Validators.required, Validators.minLength(3), dontMensoWordValidation]],
      lastname: ['', [Validators.required, dontMentionItValidation('wey')]],
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
