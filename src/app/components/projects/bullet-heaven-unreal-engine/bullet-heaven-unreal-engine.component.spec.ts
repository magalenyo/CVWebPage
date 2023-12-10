import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletHeavenUnrealEngineComponent } from './bullet-heaven-unreal-engine.component';

describe('BulletHeavenUnrealEngineComponent', () => {
  let component: BulletHeavenUnrealEngineComponent;
  let fixture: ComponentFixture<BulletHeavenUnrealEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletHeavenUnrealEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletHeavenUnrealEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
