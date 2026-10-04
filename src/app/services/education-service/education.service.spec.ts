import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { EducationService } from './education.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

describe('EducationService', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        EducationService
      ]
    });
    service = TestBed.inject(EducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it ('should get Education', () => {
    expect(service.getEducations()).not.toBeNull();
  });
});

