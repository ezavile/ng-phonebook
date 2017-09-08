import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TitleComponent } from './title/title.component';
import { IcoContactComponent } from './ico-contact/ico-contact.component';
import { ConvertToSpacesPipe } from './convert-to-spaces/convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TitleComponent,
    IcoContactComponent,
    ConvertToSpacesPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TitleComponent,
    IcoContactComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
