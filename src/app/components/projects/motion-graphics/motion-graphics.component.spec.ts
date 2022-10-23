import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionGraphicsComponent } from './motion-graphics.component';

describe('MotionGraphicsComponent', () => {
  let component: MotionGraphicsComponent;
  let fixture: ComponentFixture<MotionGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotionGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
