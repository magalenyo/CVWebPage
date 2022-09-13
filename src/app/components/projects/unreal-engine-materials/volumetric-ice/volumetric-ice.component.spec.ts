import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumetricIceComponent } from './volumetric-ice.component';

describe('VolumetricIceComponent', () => {
  let component: VolumetricIceComponent;
  let fixture: ComponentFixture<VolumetricIceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumetricIceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumetricIceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
