import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Skills } from '../../models/skills/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  accesoSkills = "Skills running...";
  private dbpath = 'skills'; // En la API nueva no lleva el '/' al inicio
  constructor(private firestore: Firestore) { }

  getSkills(): Observable<Skills[]> {
    const ref = collection(this.firestore, 'skills'); // <-- Tu nombre exacto en Firebase
    return collectionData(ref, { idField: 'id' }) as Observable<Skills[]>;
  }
}
