import { Component } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';
import { Interests } from '../models/interests/interests.model';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interests: Interests[] = [];
  constructor(public interestsService: InterestsService) { 
    this.interestsService.getInterests().subscribe(data => {
      // Verificamos que data exista antes de asignar
      if (data && data.length > 0) {
        this.interests = data;
      }
    console.log(this.interestsService.accesoInterests);
  });
 }
}
