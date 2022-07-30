import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundeadComponent } from './boundead.component';

describe('BoundeadComponent', () => {
  let component: BoundeadComponent;
  let fixture: ComponentFixture<BoundeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoundeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
