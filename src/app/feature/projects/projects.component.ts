import { Component } from '@angular/core';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  link?: ProjectLink;
}

const projects: Project[] = [
  {
    title: 'b1ngo',
    description:
      'A real-time multiplayer bingo web application themed for F1. Features lobby management, live game sessions, and a responsive interface for players to join and play together.',
    technologies: ['C#', '.NET', 'Angular', 'TypeScript'],
    github: 'https://github.com/dulait/b1ngo',
    link: { label: 'Live App', url: 'https://b1ngo.live' },
  },
  {
    title: 'helloworld-crawler',
    description:
      'A web crawler that scrapes IT interview questions, ratings, and experiences from helloworld.rs. Exports to CSV, JSON, or Excel. Available as a standalone executable, CLI tool, or GUI application.',
    technologies: ['Python'],
    github: 'https://github.com/dulait/helloworld-crawler',
  },
  {
    title: 'vstudio',
    description:
      'A .NET global tool that opens Visual Studio solution files from the command line. Finds and opens solutions by directory or by direct path.',
    technologies: ['C#', '.NET'],
    github: 'https://github.com/dulait/vstudio',
    link: { label: 'NuGet', url: 'https://www.nuget.org/packages/vstudio' },
  },
  {
    title: 'check-mate',
    description:
      'A Java library for validating standardized numbers. Supports IBANs, ISBN-10, ISBN-13, email addresses, credit card numbers, and JMBG.',
    technologies: ['Java'],
    github: 'https://github.com/dulait/check-mate',
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
