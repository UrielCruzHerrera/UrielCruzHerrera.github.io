import { TestBed } from '@angular/core/testing';
import { LanguajesService } from './languajes.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

describe('LanguajesService', () => {
  let service: LanguajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        LanguajesService
      ]
    });
    service = TestBed.inject(LanguajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should get Languajes', () => {
    expect(service.getLanguajes()).not.toBeNull();
  });

});
