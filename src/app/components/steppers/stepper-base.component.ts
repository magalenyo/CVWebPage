import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-stepper-base',
  template: '',
  styleUrls: ['./stepper-base.component.scss']
})
export class StepperBaseComponent implements OnInit {
  currentlyOpen;

  constructor(protected elem: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this.currentlyOpen = $('.step')[0];

    this.elem.nativeElement.querySelectorAll('.step').forEach(element => {
      element.addEventListener('click', (e) => {
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
      })
    });
  }

  

}
