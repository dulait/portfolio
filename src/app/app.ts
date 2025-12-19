import { Component, signal } from '@angular/core';
import { Footer, Header } from './core/components';
import { About, Contact, Experience, Projects } from './feature';

@Component({
  selector: 'app-root',
  imports: [Experience, About, Projects, Contact, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
