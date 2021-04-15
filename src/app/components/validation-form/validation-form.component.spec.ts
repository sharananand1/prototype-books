import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValidationFormComponent } from './validation-form.component';

describe('ValidationFormComponent', () => {
  let component: ValidationFormComponent;
  let fixture: ComponentFixture<ValidationFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
