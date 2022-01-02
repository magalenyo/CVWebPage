import { style } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  title = 'Miguel Ángel Bueno Rivera';

  ngOnInit(): void {
    console.log("%cWhat are you looking at 👀?!", "color: red");
  }

}
