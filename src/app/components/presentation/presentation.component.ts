import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  useVideo = true;
  videoPlaybackRate = .8;
  videoId = '#presentationVideo';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.useVideo) {
      const video = (<HTMLVideoElement> document.querySelector(this.videoId));
      if (video) {
        video.playbackRate = this.videoPlaybackRate;
        video.muted = true;
        video.play();
      }
    }
  }

}
