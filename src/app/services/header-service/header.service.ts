import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Header } from '../../models/header/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  accesoHeader: string = 'header service running...';
  private dbPath = 'header'; // En la API nueva no lleva el '/' al inicio

  constructor(private firestore: Firestore) { }

  getHeader(): Observable<Header[]> {
    const headerRef = collection(this.firestore, this.dbPath);
    // collectionData obtiene los datos y el idField le dice que incluya el ID del documento
    return collectionData(headerRef, { idField: 'id' }) as Observable<Header[]>;
  }
}