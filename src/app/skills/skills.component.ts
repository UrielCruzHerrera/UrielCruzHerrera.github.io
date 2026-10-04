import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { Skills } from '../models/skills/skills.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skills[] = [];
  constructor(public skillsService: SkillsService)
  {
    this.skillsService.getSkills().subscribe(data => {
      // Verificamos que data exista antes de asignar
      if (data && data.length > 0) {
        this.skills = data;
      }
      console.log(this.skillsService.accesoSkills);
    });
  }
}
