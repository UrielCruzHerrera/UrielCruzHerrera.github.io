import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperiences: WorkExperience[] = [];
  constructor(public workExperienceService: WorkExperienceService) 
  {
    console.log(this.workExperienceService.accesoWorkExperience);
    this.workExperienceService.getWorkExperiences().subscribe((data: WorkExperience[]) => {
      this.workExperiences = data;
      console.log('Work experiences fetched:', this.workExperiences);
    });
  }
}
