
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { appSettingsState } from '../../models/appStateDefault';
import { appSettingsStateFirebaseBellary, appSettingsStateNull } from '../auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { LocalStorageService } from '../core.module';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  appSettingsSubject: BehaviorSubject<appSettingsState> =
    new BehaviorSubject<appSettingsState>(appSettingsStateNull);

  constructor(
    private dataService: DataService,
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public localStorageService: LocalStorageService
  ) {}

  getLoggedInUser(authUser: any): Observable<appSettingsState> {
    this.appSettingsSubject.next(appSettingsStateFirebaseBellary);
    // console.log("User logged In");
    return this.appSettingsSubject;
  }

  getNonLoggedUser(): Observable<appSettingsState> {
    this.appSettingsSubject.next(appSettingsStateNull);
    // console.log("User Not logged In");
    return this.appSettingsSubject;
  }

  getAppUser(): Observable<appSettingsState> {
    return this.afAuth.authState.pipe(
      switchMap((authUser) => {
        if (authUser) {
          return this.getLoggedInUser(authUser);
        } else {
          return this.getNonLoggedUser();
        }
      })
    );
  }

  getUserFirebaseSettings(user: any) {
    // return this.dataService.loadUserSettingsFromFirebase(user);
    return of(appSettingsStateNull);
  }

  saveUserSettingsToFirebase(payload: any) {
    return this.dataService.saveUserSettingsToFirebase(
      this.appSettingsSubject.value
    );
  }

  getDefaultAppSettings(): Observable<appSettingsState> {
    if (this.localStorageService.doesExists()) {
      const data = this.localStorageService.retrieve();
      this.appSettingsSubject.next(data);
      return this.appSettingsSubject;
    } else {
      return this.appSettingsSubject;
    }
  }

  initAppSettingTest(): Observable<appSettingsState> {
    const auth$ = this.getAppUser();
    return auth$.pipe(
      take(1),
      tap((authUser) => {}),
      switchMap((user: appSettingsState) => {
        if (user && user.isLoggedIn) {
          return this.getUserFirebaseSettings(user).pipe(
            tap((locationSettingsResponse: appSettingsState) => {
              this.appSettingsSubject.next(locationSettingsResponse);
            })
          );
        } else {
          return this.getDefaultAppSettings();
        }
      })
    );
  }

  getAppSettings() {
    return this.initAppSettingTest();
  }

  saveToLocalStorage(payload: appSettingsState) {
    this.localStorageService.store(payload);
  }

  retrieveFromLocalStorage(): appSettingsState {
    return this.localStorageService.retrieve();
  }

  clearFromLocalStorage() {
    this.localStorageService.clearSettingsHelper();
  }

  updateUserObject(props: any) {
    // this.userSubject.pipe(take(1)).subscribe(user => {
    //   const newUser = {
    //     ...user,
    //     ...props,
    //   };
    //   this.userSubject.next(newUser);
    // });
  }

  updateClaimsUserObject(props: any) {
    // this.userSubject.pipe(take(1)).subscribe(user => {
    //   const newUser = {
    //     ...user,
    //     ...props,
    //   };
    //   this.userSubject.next(newUser);
    // });
  }

  resetState() {
    // this.userSubject.next(UserStateNull);
  }

  logout(): Promise<void> {
    this.resetState();
    console.log('User just signed out.');
    return this.afAuth.signOut();
  }
}
