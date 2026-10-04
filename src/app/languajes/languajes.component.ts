import { Component } from '@angular/core';
import { LanguajesService } from '../services/languajes-service/languajes.service'; // Ajusta la ruta
import { Languages } from '../models/languajes/languajes.model'; // Tu modelo se llama Languages

@Component({
  selector: 'app-languajes',
  standalone: true,
  imports: [],
  templateUrl: './languajes.component.html',
  styleUrl: './languajes.component.css'
})
export class LanguajesComponent { // Nombre con el typo
  // 1. La variable en plural y como arreglo (¡Evita el error de .length!)
  languajes: Languages[] = []; 

  constructor(public languajesService: LanguajesService) {
    console.log(this.languajesService.accesoLanguajes);
    
    // 2. Nos suscribimos al método del servicio
    this.languajesService.getLanguajes().subscribe(data => {
      // 3. Asignamos el arreglo completo
      this.languajes = data; 
      console.log('Idiomas cargados:', this.languajes);
    });
  }
}