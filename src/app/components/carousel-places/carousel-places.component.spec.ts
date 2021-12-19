import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselPlacesComponent } from './carousel-places.component';

describe('CarouselPlacesComponent', () => {
  let component: CarouselPlacesComponent;
  let fixture: ComponentFixture<CarouselPlacesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
