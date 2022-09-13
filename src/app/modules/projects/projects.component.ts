import { Component, ElementRef, OnInit } from '@angular/core';
import { glitchMaxDelay, glitchTextClass, glitchTitleClass } from 'src/app/components/shared/cardview/constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    this.initRandomGlitchTimer();
  }

  //TODO: Change this into a GlitchText component
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
