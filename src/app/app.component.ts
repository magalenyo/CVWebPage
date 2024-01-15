import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as $ from "jquery";
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators'; // Importing the filter operator
import { AppUrls } from './constants/app.constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  title = 'Miguel Ángel Bueno Rivera';
  showFooter = false;
  private routerEventsSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    $;    // to remove unused import
  }

  ngOnInit(): void {
    console.log("%cWhat are you looking at 👀?!", "color: green");
  
    // this.routerEventsSubscription = this.router.events.subscribe((event) => {
    //   console.log(this.router)
    //   if (event instanceof NavigationEnd) {
    //     this.showFooter = this.router?.url !== AppUrls.EMPTY_HOME && this.router?.url !== AppUrls.HOME;
    //   }
    // })

    this.routerEventsSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Check the URL and set the flag accordingly
      if (event.url !== AppUrls.EMPTY_HOME && event.url !== ("/" + AppUrls.HOME)) {
        this.showFooter = true;
      } else {
        this.showFooter = false;
      }
      // this.showFooter = event?.url !== AppUrls.EMPTY_HOME || event?.url !== AppUrls.HOME;
      console.log(this.showFooter);
    });
  }
  
  ngOnDestroy(): void {
    this.routerEventsSubscription?.unsubscribe;
  }

}
