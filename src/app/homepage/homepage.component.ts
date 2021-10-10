import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  title = 'Infinite Coffee store';
  subtitle = 'Which one do you want?';
  }