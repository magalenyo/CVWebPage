import { Component, ElementRef, OnInit } from '@angular/core';

import { faCalendarAlt, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { glitchMaxDelay, glitchTextClass, glitchTitleClass } from '../shared/cardview/constants';
import { listMaterials, listMotionGraphics, listProjects } from './constants';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  public listProjects = listProjects;
  public listMaterials = listMaterials;
  public listMotionGraphics = listMotionGraphics;

  faCalendar = faCalendarAlt;
  faMap = faMapMarkerAlt;
  faMail = faEnvelope;
  faPhone = faPhoneAlt;

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    this.initRandomGlitchTimer();
  }

  initRandomGlitchTimer() {
    const titleElements = this.elem.nativeElement.querySelectorAll(glitchTitleClass);
    if (titleElements){
      titleElements.forEach(element => {
        var randomDuration = Math.random() * glitchMaxDelay;
        element.style.setProperty('--randomDelay', randomDuration+'s');
      });
    }

    const textElements = this.elem.nativeElement.querySelectorAll(glitchTextClass);
    if (textElements){
      textElements.forEach(element => {
        var randomDuration = Math.random() * glitchMaxDelay;
        element.style.setProperty('--randomDelay', randomDuration+'s');
      });
    }
    
  }

}
