import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IContact } from '../../contact';
import { ContactService } from '../../contact.service';

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
  selector: 'pb-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.styl']
})
export class ContactFormComponent implements OnInit {
  @Output() contact: EventEmitter<IContact> = new EventEmitter<IContact>();
  contactForm: FormGroup;
  contactLoaded: IContact;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.contactLoaded = this.route.snapshot.data['contact'];
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      id: 0,
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
      kinship: 'home'
    });
    if (this.contactLoaded) {
      this.contactForm.patchValue(this.contactLoaded);
    }
  }

  saveContact(): void {
    if (this.contactForm.dirty && this.contactForm.valid) {
      this.contact.emit(<IContact>this.contactForm.value);
    }
  }

}
