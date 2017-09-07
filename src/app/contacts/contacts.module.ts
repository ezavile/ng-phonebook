import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  imports: [
    ContactsRoutingModule
  ],
  declarations: [ContactsListComponent]
})
export class ContactsModule { }
