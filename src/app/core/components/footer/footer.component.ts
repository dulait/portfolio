import { Component } from '@angular/core';
import {
  EMAIL_SOCIAL_LINK,
  GITHUB_SOCIAL_LINK,
  LINKEDIN_SOCIAL_LINK,
} from '../../../shared/data/social-links';

@Component({
  selector: 'pf-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  readonly EMAIL_LINK = EMAIL_SOCIAL_LINK;
  readonly GITHUB_LINK = GITHUB_SOCIAL_LINK;
  readonly LINKEDIN_LINK = LINKEDIN_SOCIAL_LINK;
}
