import { Component, ElementRef, OnInit } from '@angular/core';

import { faCalendarAlt, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  readonly glitchClass = '.content__title__glitch';
  readonly glitchMaxDelay = 3;

  faCalendar = faCalendarAlt;
  faMap = faMapMarkerAlt;
  faMail = faEnvelope;
  faPhone = faPhoneAlt;

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    this.initRandomGlitchTimer();

  }

  ngAfterViewInit(): void{
    this.initRandomGlitchTimer();

  }

  initRandomGlitchTimer() {
    const elements = this.elem.nativeElement.querySelectorAll(this.glitchClass);
    if (elements){
      elements.forEach(element => {
        var randomDuration = Math.random() * this.glitchMaxDelay;
        element.style.setProperty('--randomDelay', randomDuration+'s');
        element.style.setProperty('--x', 2+'s');
        // window.getComputedStyle(element, ':after').setProperty('animation-delay', randomDuration+'s');
        // window.getComputedStyle(element, ':before').animationDelay = randomDuration+'s';

        // element.style.animationDelay = randomDuration + 's';  

        // https://stackoverflow.com/questions/40164169/css-variables-custom-properties-in-pseudo-element-content-property
      });
    }
    
  }

}
