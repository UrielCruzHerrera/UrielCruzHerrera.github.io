import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { CertificatesComponent } from './certificates.component';
import { environment } from '../../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

describe('CertificatesComponent', () => {
  let component: CertificatesComponent;
  let fixture: ComponentFixture<CertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatesComponent],
      providers: [
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        CertificatesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
