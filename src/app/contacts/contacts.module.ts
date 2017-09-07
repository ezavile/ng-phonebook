import { NgModule } from '@angular/core';

import { ContactService } from './contact.service';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ContactsRoutingModule,
    SharedModule
  ],
  declarations: [ContactsListComponent],
  providers: [ContactService]
})
export class ContactsModule { }
