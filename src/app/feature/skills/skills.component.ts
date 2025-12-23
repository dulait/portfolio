import { Component } from '@angular/core';
import { skillCategories } from './data';

@Component({
  selector: 'pf-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillCategories = skillCategories;
}
