import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { HeaderService } from './header.service';

// 1. Importamos las funciones modernas de Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // 2. Usamos "providers" en lugar de "imports" para la configuración funcional
      providers: [
        provideHttpClient(), // Firebase necesita HTTP para funcionar en pruebas
        // 3. Inicializamos Firebase con la API moderna
        // ¡OJO! Aquí va 'environment.firebase' (no 'firebaseConfig')
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        HeaderService
      ],
    });
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should get Header', () => {
    expect(service.getHeader()).not.toBeNull();
  });
});