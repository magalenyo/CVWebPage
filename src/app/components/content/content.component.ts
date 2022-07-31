import { Component, ElementRef, OnInit } from '@angular/core';

import { faCalendarAlt, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectUrls } from 'src/app/constants/app.constants';
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
