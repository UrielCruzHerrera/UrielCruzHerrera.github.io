import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { LanguajesComponent } from "./languajes/languajes.component";
import { EducationComponent } from "./education/education.component";
import { InterestsComponent } from "./interests/interests.component";
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WorkExperienceComponent, SkillsComponent, CertificatesComponent, LanguajesComponent, EducationComponent, InterestsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mycvv';
}
