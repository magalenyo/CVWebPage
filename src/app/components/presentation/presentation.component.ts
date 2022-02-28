import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  useVideo = true;
  videoPlaybackRate = .9;
  videoId = '#presentationVideo';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.useVideo) {
      (<HTMLVideoElement> document.querySelector(this.videoId)).playbackRate = this.videoPlaybackRate;
      // (<HTMLVideoElement> document.querySelector(this.videoId)).play();
    }
  }

}
