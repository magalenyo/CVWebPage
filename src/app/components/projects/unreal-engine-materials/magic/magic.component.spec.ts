import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicComponent } from './magic.component';

describe('MagicComponent', () => {
  let component: MagicComponent;
  let fixture: ComponentFixture<MagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
