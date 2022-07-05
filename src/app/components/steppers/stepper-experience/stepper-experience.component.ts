import { Component, ElementRef } from '@angular/core';
import { StepperBaseComponent } from '../stepper-base.component';

@Component({
  selector: 'app-stepper-experience',
  templateUrl: './stepper-experience.component.html',
  styleUrls: ['../stepper-base.component.scss', './stepper-experience.component.scss']
})
export class StepperExperienceComponent extends StepperBaseComponent{
 
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
