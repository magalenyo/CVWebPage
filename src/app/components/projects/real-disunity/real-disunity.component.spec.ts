import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDisunityComponent } from './real-disunity.component';

describe('RealDisunityComponent', () => {
  let component: RealDisunityComponent;
  let fixture: ComponentFixture<RealDisunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealDisunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealDisunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
