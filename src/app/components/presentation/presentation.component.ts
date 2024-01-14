import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  useVideo = true;
  videoPlaybackRate = 1;
  videoClass = '.presentation__video';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.useVideo) {
      const videos = document.querySelectorAll(this.videoClass);

      if (videos) {
        videos.forEach((video: HTMLVideoElement) => {
          video.playbackRate = this.videoPlaybackRate;
          video.muted = true;
        })
      }
    }
  }

}
