import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsService } from '../services/skills-service/skills.service';
import { SkillsComponent } from './skills.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        SkillsService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
