import { NgModule } from '@angular/core';

import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [ContactListComponent],
  providers: [ContactService]
})
export class ContactModule { }
