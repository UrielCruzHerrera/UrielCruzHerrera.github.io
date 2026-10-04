import { Component } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';
import { Education } from '../models/education/education.model';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations: Education[] = [];
  constructor(public educationService: EducationService)
  {
    this.educationService.getEducations().subscribe(data => {
      // Verificamos que data exista antes de asignar
      if (data && data.length > 0) {
        this.educations = data;
      }
      console.log(this.educationService.accesoEducation);
    });
  }
}
