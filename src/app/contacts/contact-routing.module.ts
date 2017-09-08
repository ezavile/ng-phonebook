import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsResolver } from './contacts-resolver.service';
import { ContactResolver } from './contact-resolver.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent,
    resolve: {
      contacts: ContactsResolver
    }
  },
  {
    path: 'contact/add',
    component: ContactAddComponent
  },
  {
    path: 'contact/:id/edit',
    component: ContactEditComponent,
    resolve: {
      contact: ContactResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
