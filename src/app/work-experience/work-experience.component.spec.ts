import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperienceComponent } from './work-experience.component';
import { environment } from '../../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceComponent],
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        WorkExperienceService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
