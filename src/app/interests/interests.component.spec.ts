import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationService } from '../services/education-service/education.service';
import { InterestsComponent } from './interests.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsComponent],
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        EducationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
