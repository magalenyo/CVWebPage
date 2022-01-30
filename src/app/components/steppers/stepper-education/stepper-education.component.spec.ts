import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperEducationComponent } from './stepper-education.component';

describe('StepperEducationComponent', () => {
  let component: StepperEducationComponent;
  let fixture: ComponentFixture<StepperEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
