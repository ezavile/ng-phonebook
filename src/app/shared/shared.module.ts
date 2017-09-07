import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TitleComponent } from './title/title.component';
import { IcoContactComponent } from './ico-contact/ico-contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TitleComponent,
    IcoContactComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    TitleComponent,
    IcoContactComponent
  ]
})
export class SharedModule { }
