import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeExpressApiComponent } from './node-express-api.component';

describe('NodeExpressApiComponent', () => {
  let component: NodeExpressApiComponent;
  let fixture: ComponentFixture<NodeExpressApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeExpressApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeExpressApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
