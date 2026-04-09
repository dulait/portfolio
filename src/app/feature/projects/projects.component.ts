import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'b1ngo',
    description:
      'A real-time multiplayer bingo web application, themed for F1. Features lobby management, live game sessions, and a responsive interface for players to join and play together.',
    image:
      'https://images.unsplash.com/photo-1699138346782-8a8b211c3da2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    technologies: ['Angular', 'TypeScript', 'C#', '.NET'],
    github: 'https://github.com/dulait/b1ngo',
    demo: 'https://b1ngo.live',
  },
  {
    title: 'Project 2 - Coming Soon',
    description:
      'This project is currently in development. Check out my GitHub profile to see my latest work and contributions.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    technologies: ['Work In Progress'],
    github: 'https://github.com/dulait',
    demo: 'https://github.com/dulait',
  },
  {
    title: 'Project 3 - Coming Soon',
    description:
      'This project is currently in development. Check out my GitHub profile to see my latest work and contributions.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    technologies: ['Work In Progress'],
    github: 'https://github.com/dulait',
    demo: 'https://github.com/dulait',
  },
];

@Component({
  selector: 'pf-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = projects;
}
