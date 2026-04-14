import { Component } from '@angular/core';
import {
  EMAIL_SOCIAL_LINK,
  GITHUB_SOCIAL_LINK,
  LINKEDIN_SOCIAL_LINK,
} from '../../shared/data/social-links';

interface ContactMethod {
  platform: string;
  label: string;
  url: string;
  isExternal: boolean;
}

@Component({
  selector: 'pf-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly contactMethods: ContactMethod[] = [
    {
      platform: 'Email',
      label: EMAIL_SOCIAL_LINK.label,
      url: EMAIL_SOCIAL_LINK.url,
      isExternal: false,
    },
    {
      platform: 'GitHub',
      label: GITHUB_SOCIAL_LINK.label,
      url: GITHUB_SOCIAL_LINK.url,
      isExternal: true,
    },
    {
      platform: 'LinkedIn',
      label: LINKEDIN_SOCIAL_LINK.label,
      url: LINKEDIN_SOCIAL_LINK.url,
      isExternal: true,
    },
  ];
}
