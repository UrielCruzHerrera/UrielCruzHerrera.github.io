import { TestBed } from '@angular/core/testing';
import { SkillsService } from './skills.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        SkillsService
      ] 
    });
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should get Skills', () => {
    expect(service.getSkills()).not.toBeNull();
  });

});
