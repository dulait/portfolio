import {
  GITHUB_SOCIAL_LINK,
  LINKEDIN_SOCIAL_LINK,
  EMAIL_SOCIAL_LINK,
} from './../../shared/data/social-links';
import { Component, inject, OnInit } from '@angular/core';
import { Quote } from './model';
import { quotes } from './data';
import { ScrollToSectionService } from '../../shared/service';

@Component({
  selector: 'pf-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly _scrollToSectionService = inject(ScrollToSectionService);

  // todo - maybe we can find a better way to handle social links later
  readonly GITHUB_SOCIAL_LINK = GITHUB_SOCIAL_LINK;
  readonly LINKEDIN_SOCIAL_LINK = LINKEDIN_SOCIAL_LINK;
  readonly EMAIL_SOCIAL_LINK = EMAIL_SOCIAL_LINK;

  currentQuote: Quote = quotes[0];

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.currentQuote = quotes[randomIndex];
  }

  // todo - this is fine for now, but we should consider a better approach later
  scrollToProjectsSection(): void {
    this._scrollToSectionService.scrollToSection('#projects');
  }

  scrollToContactSection(): void {
    this._scrollToSectionService.scrollToSection('#contact');
  }
}
