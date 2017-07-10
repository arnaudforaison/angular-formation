import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonComponent } from './form-person.component';

describe('FormPersonComponent', () => {
  let component: FormPersonComponent;
  let fixture: ComponentFixture<FormPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
