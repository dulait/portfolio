import { Component } from '@angular/core';
import { contactMethods } from './data';

@Component({
  selector: 'pf-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactMethods = contactMethods;
}
