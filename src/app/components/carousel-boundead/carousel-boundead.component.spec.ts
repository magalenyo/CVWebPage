import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBoundeadComponent } from './carousel-boundead.component';

describe('CarouselBoundeadComponent', () => {
  let component: CarouselBoundeadComponent;
  let fixture: ComponentFixture<CarouselBoundeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBoundeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBoundeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
