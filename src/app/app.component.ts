import { style } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


import * as $ from "jquery";

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  title = 'Miguel Ángel Bueno Rivera';

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    this.setUpAnalytics();
    console.log("%cWhat are you looking at 👀?!", "color: green");
  }

  setUpAnalytics() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
            gtag('config', 'G-5JENKT7JP8',
                {
                    page_path: event.urlAfterRedirects
                }
            );
        });
  }

}
