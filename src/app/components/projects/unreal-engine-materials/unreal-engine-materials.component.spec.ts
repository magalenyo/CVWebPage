import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrealEngineMaterialsComponent } from './unreal-engine-materials.component';

describe('UnrealEngineMaterialsComponent', () => {
  let component: UnrealEngineMaterialsComponent;
  let fixture: ComponentFixture<UnrealEngineMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrealEngineMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrealEngineMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
