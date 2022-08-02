import { Component, ElementRef, OnInit } from '@angular/core';

import { faCalendarAlt, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectUrls } from 'src/app/constants/app.constants';
import { glitchMaxDelay, glitchTextClass, glitchTitleClass } from '../shared/cardview/constants';
import { CardviewModel } from '../shared/cardview/model/cardview.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public cardviewBoundeadModel : CardviewModel = {
    title: "Boundead",
    description: "descrtiption",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.BOUNDEAD
  }

  public cardviewRealDisunityModel : CardviewModel = {
    title: "Real Disunity Engine",
    description: "descrtiption",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.REAL_DISUNITY
  }

  public cardviewTesseractModel : CardviewModel = {
    title: "Tesseract Engine",
    description: "descrtiption",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.TESSERACT
  }

  public cardviewShutdownModel : CardviewModel = {
    title: "Shutdown Videogame",
    description: "descrtiption",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.SHUTDOWN
  }

  public cardviewUEMaterialsModel: CardviewModel = {
    title: "Unreal Engine Materials",
    description: "descrtiption",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS
  }

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
