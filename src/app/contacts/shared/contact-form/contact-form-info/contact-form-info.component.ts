import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IContact } from '../../../contact';

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
  selector: 'pb-contact-form-info',
  templateUrl: './contact-form-info.component.html',
  styleUrls: ['./contact-form-info.component.styl']
})
export class ContactFormInfoComponent implements OnInit {
  form: FormGroup;
  contact: IContact;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      id: null,
      firstname: ['', [Validators.required, Validators.minLength(3), dontMensoWordValidation]],
      lastname: ['', [Validators.required, dontMentionItValidation('wey')]],
      email: '',
      phone: ['', Validators.required],
      kinship: 'home'
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
