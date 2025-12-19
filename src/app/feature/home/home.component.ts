import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StoicQuote {
  quote: string;
  author: string;
}

const stoicQuotes: StoicQuote[] = [
  {
    quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    quote: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius"
  },
  {
    quote: "He who fears death will never do anything worth of a man who is alive.",
    author: "Seneca"
  },
  {
    quote: "Difficulties strengthen the mind, as labor does the body.",
    author: "Seneca"
  },
  {
    quote: "No man is free who is not master of himself.",
    author: "Epictetus"
  },
  {
    quote: "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus"
  },
  {
    quote: "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus"
  },
  {
    quote: "It is not that we have a short time to live, but that we waste a lot of it.",
    author: "Seneca"
  },
  {
    quote: "The best revenge is to be unlike him who performed the injury.",
    author: "Marcus Aurelius"
  },
  {
    quote: "If it is not right, do not do it. If it is not true, do not say it.",
    author: "Marcus Aurelius"
  }
];

@Component({
  selector: 'pf-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  currentQuote: StoicQuote = stoicQuotes[0];

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * stoicQuotes.length);
    this.currentQuote = stoicQuotes[randomIndex];
  }
}
