import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  faCalendar = faCalendarAlt;
  faMap = faMapMarkerAlt;
  faMail = faEnvelope;
  faPhone = faPhoneAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
