import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { CertificatesService } from './certificates.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

describe('CertificatesService', () => {
  let service: CertificatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        CertificatesService
      ]
    });
    service = TestBed.inject(CertificatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it ('should get Service', () => {
    expect(service.getCertificates()).not.toBeNull();
  });
});

