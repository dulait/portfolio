import { Component, signal } from '@angular/core';
import { FooterComponent, HeaderComponent } from './core/components';
import { AboutComponent, ContactComponent, HomeComponent, ProjectsComponent, SkillsComponent } from './feature';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
