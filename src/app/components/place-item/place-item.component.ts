import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.scss']
})
export class PlaceItemComponent implements OnInit {
  @Input() placeItem : Place;

  placeName: String;
  placeAddress: String;
  placeImage: String;

  constructor() { }

  ngOnInit(): void {
    console.log("me");
    if (this.placeItem != null) {
      this.placeName = this.placeItem.placeName;
      this.placeAddress = this.placeItem.placeAddress;
      this.placeImage = this.placeItem.placeImage;
    }
  }

}
