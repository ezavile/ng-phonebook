import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact/add', component: ContactAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
