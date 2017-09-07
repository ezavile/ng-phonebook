import { Component, Input } from '@angular/core';

@Component({
  selector: 'pb-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.styl']
})
export class TitleComponent {
  @Input() pageTitle: string = 'You need to put a title!!!';
  @Input() pageSubtitle: string;
}
