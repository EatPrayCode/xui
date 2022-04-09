
import { Injectable } from '@angular/core';
import { FirebaseApiService } from './firebase-api.service';
import { appState } from '../models/app.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public firebaseApi: FirebaseApiService
  ) { }

  signInWithGoogle() {
    return this.firebaseApi.signInWithGoogle();
  }

  signInAnonymously() {
    return this.firebaseApi.signInAnonymously();
  }

  getAppUserSettings(): Observable<appState> {
    return this.firebaseApi.getAppUserSettings();
  }

  handleAuthJourney(authUser: any) {
    this.firebaseApi.handleAuthJourney(authUser);
  }

  logout() {
    return this.firebaseApi.logout();
  }

}
