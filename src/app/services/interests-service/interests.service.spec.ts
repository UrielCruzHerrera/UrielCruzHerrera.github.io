import { TestBed } from '@angular/core/testing';
import { InterestsService } from './interests.service';
import { environment } from '../../../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';


describe('InterestsService', () => {
  let service: InterestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
     providers: [
            provideHttpClient(),
            provideFirebaseApp(() => initializeApp(environment.firebase)),
            provideFirestore(() => getFirestore()),
            InterestsService
          ]
    
  });
    service = TestBed.inject(InterestsService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should get Interests', () => {
    expect(service.getInterests()).not.toBeNull();
  });
});

