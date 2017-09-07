import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title/title.component';
import { IcoContactComponent } from './ico-contact/ico-contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitleComponent,
    IcoContactComponent
  ],
  exports: [
    TitleComponent,
    IcoContactComponent
  ]
})
export class SharedModule { }
