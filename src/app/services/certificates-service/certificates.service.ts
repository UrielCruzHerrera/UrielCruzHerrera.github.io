import { Injectable } from '@angular/core';
import { Certificates } from '../../models/certificates/certificates.model';
import { Observable, of } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private dbPath = 'certificates';
  accesoCertificates = "Certificates running...";
  
  constructor(private firestore: Firestore) { }

  getCertificates(): Observable<Certificates[]> {
    const certificatesCollection = collection(this.firestore, this.dbPath);
    return collectionData(certificatesCollection, { idField: 'id' }) as Observable<Certificates[]>;
  }
  
}
