import { Component } from '@angular/core';
import { JourneyComponent } from './components/journey';

@Component({
  selector: 'pf-about',
  imports: [JourneyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
