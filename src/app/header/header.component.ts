import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  header: Header = new Header();

  constructor(public headerService: HeaderService)
   {
    this.headerService.getHeader().subscribe(data => {
      // Verificamos que data exista antes de asignar
      if (data && data.length > 0) {
        this.header = data[0];
      }
      console.log('Datos de Firebase:', this.header);
    });
  }
}