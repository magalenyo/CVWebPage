import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlaceItemComponent } from './place-item.component';

describe('PlaceItemComponent', () => {
  let component: PlaceItemComponent;
  let fixture: ComponentFixture<PlaceItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
