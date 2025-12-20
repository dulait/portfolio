import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timelineItems } from './journey';

@Component({
  selector: 'pf-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.css',
})
export class JourneyComponent {
  readonly timelineItems = timelineItems;
}
