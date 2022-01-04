import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-stepper-education',
  templateUrl: './stepper-education.component.html',
  styleUrls: ['./stepper-education.component.scss']
})
export class StepperEducationComponent implements OnInit {

  currentlyOpen;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this.currentlyOpen = $('.step')[0];

    $('.step').on('click', (e) => {
      const thisObject = e.currentTarget;

      if (!thisObject.classList.contains("minimized")) {
        this.currentlyOpen = null;
        thisObject.classList.add('minimized');
      }
      else {
        let next = thisObject;
        if (this.currentlyOpen === null) {
          this.currentlyOpen = next;
          thisObject.classList.remove('minimized');
        }
        else {
          thisObject.classList.add('minimized');
          setTimeout(function() {
            next.classList.remove('minimized');
            this.currentlyOpen = next;
          }, 300);
        }
      }
    });
  }

  

}
