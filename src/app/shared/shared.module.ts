import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TitleComponent } from './title/title.component';
import { IcoContactComponent } from './ico-contact/ico-contact.component';
import { ConvertToSpacesPipe } from './convert-to-spaces/convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TitleComponent,
    IcoContactComponent,
    ConvertToSpacesPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    TitleComponent,
    IcoContactComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
