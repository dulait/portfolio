import { SocialLink } from '../model';

export const GITHUB_SOCIAL_LINK: SocialLink = {
  platform: 'GitHub',
  url: 'https://github.com/dulait',
  label: 'github.com/dulait',
} as const;

export const LINKEDIN_SOCIAL_LINK: SocialLink = {
  platform: 'LinkedIn',
  url: 'https://www.linkedin.com/in/dusan-draskovic/',
  label: 'linkedin.com/in/dusan-draskovic',
} as const;

export const EMAIL_SOCIAL_LINK: SocialLink = {
  platform: 'Email',
  url: 'mailto:draskovicdusan4@gmail.com',
  label: 'draskovicdusan4@gmail.com',
} as const;
