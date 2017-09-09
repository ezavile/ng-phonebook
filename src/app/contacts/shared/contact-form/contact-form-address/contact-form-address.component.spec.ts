import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormAddressComponent } from './contact-form-address.component';

describe('ContactFormAddressComponent', () => {
  let component: ContactFormAddressComponent;
  let fixture: ComponentFixture<ContactFormAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
