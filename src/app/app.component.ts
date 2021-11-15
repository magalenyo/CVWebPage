import { Component, ViewEncapsulation } from '@angular/core';
import { faCalendarAlt, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Miguel Ángel Bueno Rivera';
  faCalendar = faCalendarAlt;
  faMap = faMapMarkerAlt;
  faMail = faEnvelope;
  faPhone = faPhoneAlt;
}
