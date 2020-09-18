import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-carousel-places',
  templateUrl: './carousel-places.component.html',
  styleUrls: ['./carousel-places.component.scss']
})
export class CarouselPlacesComponent implements OnInit {

  placesList : Place[] = [];

  constructor() { }

  ngOnInit(): void {
    this.placesList.push(new Place("Place 1", "Place 1 address", "https://images.squarespace-cdn.com/content/v1/50169e2584ae68067baa77af/1542293096036-ABBSHC1ZZC8DOPFE44TE/ke17ZwdGBToddI8pDm48kCXbIGZCF5ISkA_i8r8HbVd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kMlYkjvFlctRdmAM11rxFSdbx_99JZwzhc9EL4JfGfzX23cSFIMy00fXD13UHqklA/scorpion0001.jpg?format=1000w"));
    this.placesList.push(new Place("Place 2", "Place 2 address", "https://images.squarespace-cdn.com/content/v1/50169e2584ae68067baa77af/1542293123042-LVHOPHGM0KH5YDHYRJU1/ke17ZwdGBToddI8pDm48kCXbIGZCF5ISkA_i8r8HbVd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kMlYkjvFlctRdmAM11rxFSdbx_99JZwzhc9EL4JfGfzX23cSFIMy00fXD13UHqklA/sub-zero0001.jpg?format=1000w"));
  }

}
