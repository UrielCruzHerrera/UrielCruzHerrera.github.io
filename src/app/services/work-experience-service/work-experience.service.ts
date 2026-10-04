import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { WorkExperience } from '../../models/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  accesoWorkExperience: string = 'work experience service running...';
  private dbPath = 'work-experience'; // En la API nueva no lleva el '/' al inicio
  constructor(private firestore: Firestore) { }

  getWorkExperiences(): Observable<WorkExperience[]> {
    const workExperienceRef = collection(this.firestore, this.dbPath);
    return collectionData(workExperienceRef, { idField: 'id' }) as Observable<WorkExperience[]>;
  }
} 
