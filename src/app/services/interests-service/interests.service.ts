import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Interests } from '../../models/interests/interests.model';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  accesoInterests = "Interests running...";
  private dbPath = 'interests'; // En la API nueva no lleva el '/' al inicio
  constructor(private firestore: Firestore) { }

getInterests(): Observable<Interests[]> {
  const ref = collection(this.firestore, 'interests'); // <-- Tu nombre exacto en Firebase
  return collectionData(ref, { idField: 'id' }) as Observable<Interests[]>;
}

}
