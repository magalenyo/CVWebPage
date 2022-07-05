import { Component, ElementRef, OnInit } from '@angular/core';
import { StepperBaseComponent } from '../stepper-base.component';


@Component({
  selector: 'app-stepper-education',
  templateUrl: './stepper-education.component.html',
  styleUrls: ['../stepper-base.component.scss', './stepper-education.component.scss']
})
export class StepperEducationComponent extends StepperBaseComponent{
 
  constructor(elem: ElementRef) {
    super(elem);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

}
