import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimeComponent } from './slime.component';

describe('SlimeComponent', () => {
  let component: SlimeComponent;
  let fixture: ComponentFixture<SlimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
