import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUnrealEngineProjectsComponent } from './other-unreal-engine-projects.component';

describe('OtherUnrealEngineProjectsComponent', () => {
  let component: OtherUnrealEngineProjectsComponent;
  let fixture: ComponentFixture<OtherUnrealEngineProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherUnrealEngineProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUnrealEngineProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
