import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormInfoComponent } from './contact-form-info.component';

describe('ContactFormInfoComponent', () => {
  let component: ContactFormInfoComponent;
  let fixture: ComponentFixture<ContactFormInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
