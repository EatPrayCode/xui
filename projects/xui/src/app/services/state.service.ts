import { appState, appStateFirebaseAnonymous, appStateFirebaseNull, appStateFirebaseSample, userSettings, userSettingsAnonymous, userSettingsNull, userSettingsSample } from '../models/app.state';

import { switchMap, take, tap, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocalStorageService } from '../core/core.module';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  appSettingsSubject: BehaviorSubject<appState> =
    new BehaviorSubject<appState>(appStateFirebaseAnonymous);

  constructor(
    public localStorageService: LocalStorageService,
    public authService: AuthService,
  ) { }

  getAppUserSettings() {
    return this.authService.getAppUserSettings();
  }

  setUser(user) {
  }

  handleAuthJourney(user){
    this.authService.handleAuthJourney(user);
  }

  // handleAuthJourney(authUser: any) {
  //   authUser.getIdTokenResult()
  //     .then((idTokenResult: any) => {
  //       const claims = idTokenResult.claims;
  //       this.initLoggedInAppSettingsState(claims);
  //     });
  //   this.afStore.doc<any>(`users/${authUser.uid}`).get()
  //     .subscribe((snapshot: DocumentSnapshot<any>) => {
  //       const user = snapshot.data();
  //       this.stateService.updateUserObject(user);
  //     });
  // }

}
