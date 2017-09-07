import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoContactComponent } from './ico-contact.component';

describe('IcoContactComponent', () => {
  let component: IcoContactComponent;
  let fixture: ComponentFixture<IcoContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
