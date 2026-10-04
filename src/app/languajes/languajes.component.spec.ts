import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguajesService } from '../services/languajes-service/languajes.service';
import { LanguajesComponent } from './languajes.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


describe('LanguajesComponent', () => {
  let component: LanguajesComponent;
  let fixture: ComponentFixture<LanguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguajesComponent],
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        LanguajesService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
