import { Component } from '@angular/core';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
}

interface TechCategory {
  label: string;
  items: string[];
}

@Component({
  selector: 'pf-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly experience: ExperienceItem[] = [
    {
      company: 'QCerris',
      role: 'Software Engineer',
      period: '2025 - Present',
      isCurrent: true,
    },
    {
      company: 'TubeIQ',
      role: 'Junior Software Engineer',
      period: '2024 - 2025',
      isCurrent: false,
    },
  ];

  readonly technologies: TechCategory[] = [
    { label: 'Primary', items: ['C# / .NET', 'Angular', 'TypeScript', 'SQL'] },
    { label: 'Also', items: ['Java / Spring', 'RxJS', 'SignalR', 'REST', 'GraphQL'] },
    { label: 'Tooling', items: ['Git', 'Docker', 'Azure', 'Kubernetes', 'CI/CD'] },
  ];
}
