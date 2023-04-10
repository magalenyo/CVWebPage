import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnalUnrealEngineComponent } from './returnal-unreal-engine.component';

describe('ReturnalUnrealEngineComponent', () => {
  let component: ReturnalUnrealEngineComponent;
  let fixture: ComponentFixture<ReturnalUnrealEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnalUnrealEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnalUnrealEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
