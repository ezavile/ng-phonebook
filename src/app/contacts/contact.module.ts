import { NgModule } from '@angular/core';

import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { ContactsResolver } from './contacts-resolver.service';
import { ContactResolver } from './contact-resolver.service';
import { ContactFormInfoComponent } from './shared/contact-form/contact-form-info/contact-form-info.component';
import { ContactFormAddressComponent } from './shared/contact-form/contact-form-address/contact-form-address.component';

@NgModule({
  imports: [
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [
    ContactListComponent,
    ContactAddComponent,
    ContactEditComponent,
    ContactFormComponent,
    ContactFormInfoComponent,
    ContactFormAddressComponent
  ],
  providers: [
    ContactService,
    ContactsResolver,
    ContactResolver
  ]
})
export class ContactModule { }
