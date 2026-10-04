import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationService } from '../services/education-service/education.service';
import { EducationComponent } from './education.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
       providers: [
              provideHttpClient(),
              provideFirebaseApp(() => initializeApp(environment.firebase)),
              provideFirestore(() => getFirestore()),
              EducationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
