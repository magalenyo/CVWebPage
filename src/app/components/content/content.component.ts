import { Component, ElementRef, OnInit } from '@angular/core';

import { faCalendarAlt, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  readonly glitchTitleClass = '.content__title__glitch';
  readonly glitchTextClass = '.content__text__glitch';

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
    const titleElements = this.elem.nativeElement.querySelectorAll(this.glitchTitleClass);
    if (titleElements){
      titleElements.forEach(element => {
        var randomDuration = Math.random() * this.glitchMaxDelay;
        element.style.setProperty('--randomDelay', randomDuration+'s');
      });
    }

    const textElements = this.elem.nativeElement.querySelectorAll(this.glitchTextClass);
    if (textElements){
      textElements.forEach(element => {
        var randomDuration = Math.random() * this.glitchMaxDelay;
        element.style.setProperty('--randomDelay', randomDuration+'s');
      });
    }
    
  }

}
