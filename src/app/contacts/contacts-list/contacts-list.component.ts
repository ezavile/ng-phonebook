import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.styl']
})
export class ContactsListComponent implements OnInit {
  whereIsItfrom: string;

  constructor() { }

  ngOnInit() {
  }

  onIcoClicked(message: string): void {
    this.whereIsItfrom = message;
  }

}
