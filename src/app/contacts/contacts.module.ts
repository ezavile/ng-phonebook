import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ],
  declarations: [ContactsListComponent]
})
export class ContactsModule { }
