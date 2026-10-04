import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Education } from '../../models/education/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  
  accesoEducation = "Education running...";
  private dbPath = 'education'; // En la API nueva no lleva el '/' al inicio
  constructor(private firestore: Firestore) { } 

  getEducations(): Observable<Education[]> {
    const educationRef = collection(this.firestore, this.dbPath);
    return collectionData(educationRef, { idField: 'id' }) as Observable<Education[]>;
  }
}

