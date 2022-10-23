import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberComponent } from './cyber.component';

describe('CyberComponent', () => {
  let component: CyberComponent;
  let fixture: ComponentFixture<CyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
