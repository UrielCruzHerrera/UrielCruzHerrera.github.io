import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Languages } from '../../models/languajes/languajes.model'; // Tu modelo se llama Languages

@Injectable({
  providedIn: 'root'
})
export class LanguajesService { // Nombre con el typo tal como lo tienes
  accesoLanguajes: string = 'languajes service running...';
  private dbPath = 'languages'; // <-- ¡OJO! Pon aquí el nombre EXACTO de tu colección en Firebase

  constructor(private firestore: Firestore) { }

  getLanguajes(): Observable<Languages[]> {
    const languajesRef = collection(this.firestore, this.dbPath);
    return collectionData(languajesRef, { idField: 'id' }) as Observable<Languages[]>;
  }
}