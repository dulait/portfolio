import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from './core/components';
import { AboutComponent, ContactComponent, HomeComponent, ProjectsComponent } from './feature';

@Component({
  selector: 'pf-app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
