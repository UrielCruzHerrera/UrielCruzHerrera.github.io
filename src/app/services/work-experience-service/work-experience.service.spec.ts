import { TestBed } from '@angular/core/testing';
import { WorkExperienceService } from './work-experience.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

describe('WorkExperienceService', () => {
  let service: WorkExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        WorkExperienceService
      ]
    });
    service = TestBed.inject(WorkExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should get Work Experiences', () => {
    expect(service.getWorkExperiences()).not.toBeNull();
  });
});
