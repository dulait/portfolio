import { TimelineItem } from './journey.interface';

export const timelineItems: TimelineItem[] = [
  {
    period: '2024 - 2025',
    title: 'Junior Software Engineer',
    company: 'TubeIQ',
    dotColor: 'bg-blue-500',
    isPresent: false,
    alignment: 'right',
  },
  {
    period: '2025 - Present',
    title: 'Software Engineer',
    company: 'QCerris',
    dotColor: 'bg-blue-400',
    isPresent: true,
    alignment: 'left',
  },
] as const;
