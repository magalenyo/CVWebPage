import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphingComponent } from './morphing.component';

describe('MorphingComponent', () => {
  let component: MorphingComponent;
  let fixture: ComponentFixture<MorphingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorphingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
