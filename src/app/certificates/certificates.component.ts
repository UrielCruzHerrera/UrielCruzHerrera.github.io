import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { Certificates } from '../models/certificates/certificates.model';
@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates: Certificates[] = [];
  constructor(public certificatesService: CertificatesService) { 
    this.certificatesService.getCertificates().subscribe(data => {
      // Verificamos que data exista antes de asignar
      if (data && data.length > 0) {
        this.certificates = data;
      }
       console.log(this.certificatesService.accesoCertificates);
    });
  }
}
