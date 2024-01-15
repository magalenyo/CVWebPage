import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from "jquery";
import { AppUrls } from './constants/app.constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  title = 'Miguel Ángel Bueno Rivera';
  showFooter = true

  constructor(private router: Router) {
    $;    // to remove unused import
    this.showFooter = router?.url !== AppUrls.EMPTY_HOME && router?.url !== AppUrls.HOME;
  }

  ngOnInit(): void {
    console.log("%cWhat are you looking at 👀?!", "color: green");
  }

}
