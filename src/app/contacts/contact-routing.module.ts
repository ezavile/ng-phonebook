import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsResolver } from './contacts-resolver.service';
import { ContactResolver } from './contact-resolver.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactFormInfoComponent } from './shared/contact-form/contact-form-info/contact-form-info.component';
import { ContactFormAddressComponent } from './shared/contact-form/contact-form-address/contact-form-address.component';

const childrenRoutes: Routes = [
  {
    path: '', redirectTo: 'info', pathMatch: 'full',
  },
  {
    path: 'info', component: ContactFormInfoComponent
  },
  {
    path: 'address', component: ContactFormAddressComponent
  }
];

const routes: Routes = [
  {
    path: 'contact',
    children: [
      {
        path: 'list',
        component: ContactListComponent,
        resolve: {
          contacts: ContactsResolver
        },
      },
      {
        path: 'add',
        component: ContactAddComponent,
        children: [...childrenRoutes]
      },
      {
        path: ':id/edit',
        component: ContactEditComponent,
        resolve: {
          contact: ContactResolver
        },
        children: [...childrenRoutes]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
