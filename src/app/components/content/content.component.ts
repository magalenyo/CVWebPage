import { Component, ElementRef, OnInit } from '@angular/core';

import { faCalendarAlt, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { glitchMaxDelay, glitchTextClass, glitchTitleClass } from '../shared/cardview/constants';
import { cardviewBoundeadModel, cardviewNodeExpressApiModel, cardviewRealDisunityModel, cardviewShutdownModel, cardviewTesseractModel, cardviewUEBubbleModel, cardviewUEGlassModel, cardviewUEGlitterBallModel, cardviewUEMagicSphereModel, cardviewUEMaterialsModel, cardviewUEScreenModel, cardviewUESlimeModel, cardviewUESunModel, cardviewUEVolumetricIceModel } from './constants';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public cardviewBoundeadModel = cardviewBoundeadModel;
  public cardviewRealDisunityModel = cardviewRealDisunityModel;
  public cardviewTesseractModel = cardviewTesseractModel;
  public cardviewShutdownModel = cardviewShutdownModel;
  public cardviewUEMaterialsModel = cardviewUEMaterialsModel;
  public cardviewNodeExpressApiModel = cardviewNodeExpressApiModel;

  public cardviewUEVolumetricIceModel = cardviewUEVolumetricIceModel;
  public cardviewUEGlitterBallModel = cardviewUEGlitterBallModel;
  public cardviewUEMagicSphereModel = cardviewUEMagicSphereModel;
  public cardviewUESlimeModel = cardviewUESlimeModel;
  public cardviewUEGlassModel = cardviewUEGlassModel;
  public cardviewUEBubbleModel = cardviewUEBubbleModel;
  public cardviewUESunModel = cardviewUESunModel;
  public cardviewUEScreenModel = cardviewUEScreenModel;

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
