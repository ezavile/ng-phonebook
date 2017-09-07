import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pb-ico-contact',
  templateUrl: './ico-contact.component.html',
  styleUrls: ['./ico-contact.component.styl']
})
export class IcoContactComponent {
  @Input() type: string;
  @Input() name: string;
  @Output() icoClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.icoClicked.emit(this.buildMessage());
  }

  private buildMessage(): string {
    const isYour: string = 'is your ';
    let place: string = '';

    switch (this.type) {
      case 'heart':
        place = 'girlfriend/boyfriend!';
        break;
      case 'glass':
        place = 'friend!';
        break;
      case 'home':
        place = 'relative!';
        break;
      case 'lock':
        place = 'co-worker!';
        break;
      default:
        place = 'Where is he / she from?';
        break;
    }

    return `${this.name} ${isYour} ${place}`;
  }
}
