import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Miguel Ángel Bueno Rivera';
  faCalendar = faCalendar;
}
