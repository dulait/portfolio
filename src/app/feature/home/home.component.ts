import { Component, OnInit, signal } from '@angular/core';
import {
  GITHUB_SOCIAL_LINK,
  LINKEDIN_SOCIAL_LINK,
  EMAIL_SOCIAL_LINK,
} from './../../shared/data/social-links';
import { Quote } from './model';
import { quotes } from './data';
import { TypewriterDirective } from '../../shared/directive/typewriter.directive';

@Component({
  selector: 'pf-home',
  imports: [TypewriterDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  readonly GITHUB_SOCIAL_LINK = GITHUB_SOCIAL_LINK;
  readonly LINKEDIN_SOCIAL_LINK = LINKEDIN_SOCIAL_LINK;
  readonly EMAIL_SOCIAL_LINK = EMAIL_SOCIAL_LINK;

  currentQuote = signal<Quote>(quotes[0]);

  private lastIndex = -1;

  ngOnInit(): void {
    this.pickNewQuote();
  }

  onQuoteDeleted(): void {
    this.pickNewQuote();
  }

  private pickNewQuote(): void {
    let index: number;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === this.lastIndex && quotes.length > 1);
    this.lastIndex = index;
    this.currentQuote.set(quotes[index]);
  }
}
