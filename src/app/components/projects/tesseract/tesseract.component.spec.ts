import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseractComponent } from './tesseract.component';

describe('TesseractComponent', () => {
  let component: TesseractComponent;
  let fixture: ComponentFixture<TesseractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesseractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesseractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
