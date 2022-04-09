import { appState, appStateFirebaseNull } from '../models/app.state';

import { switchMap, take, tap, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocalStorageService } from '../core/core.module';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  appSettingsSubject: BehaviorSubject<appState> = new BehaviorSubject<appState>(appStateFirebaseNull);

  constructor(
    public localStorageService: LocalStorageService,
    public authService: AuthService,
  ) { }

  getAppUserSettings() {
    return this.authService.getAppUserSettings();
  }

  handleAuthJourney(user) {
    this.authService.handleAuthJourney(user);
  }

  resetState() {
    this.appSettingsSubject.next(appStateFirebaseNull);
  }

}
