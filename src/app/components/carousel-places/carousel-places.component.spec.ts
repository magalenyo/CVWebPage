import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPlacesComponent } from './carousel-places.component';

describe('CarouselPlacesComponent', () => {
  let component: CarouselPlacesComponent;
  let fixture: ComponentFixture<CarouselPlacesComponent>;

  beforeEach(async(() => {
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
