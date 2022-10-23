import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CardviewModel } from './model/cardview.model';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss']
})
export class CardviewComponent implements OnInit {

  @Input() model : CardviewModel;

  @ViewChild('video') video; 

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.model.video) {
      if (this.video.nativeElement) {
        this.video.nativeElement.muted = true;
        this.video.nativeElement.play();
      }
    }
  }

  navigate(): void {
    this.router.navigate([this.model.url]);
  }

}
