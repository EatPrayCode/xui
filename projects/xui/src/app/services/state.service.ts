import { appState, appStateFirebaseAnonymous, appStateFirebaseNull, appStateFirebaseSample } from '../models/app.state';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataService } from './data.service';
// import { appState as appSettingsState } from '../models/app.state';
import { LocalStorageService } from '../core/core.module';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  appSettingsSubject: BehaviorSubject<appState> =
    new BehaviorSubject<appState>(appStateFirebaseNull);

  constructor(
    private dataService: DataService,
    // public afAuth: AngularFireAuth,
    // public afStore: AngularFirestore,
    public localStorageService: LocalStorageService
  ) { }

  // getLoggedInUser(authUser: any): Observable<appSettingsState> {
  //   this.appSettingsSubject.next(appStateFirebaseBangalore);
  //   // console.log("User logged In");
  //   return this.appSettingsSubject;
  // }

  // getNonLoggedUser(): Observable<appSettingsState> {
  //   this.appSettingsSubject.next(appStateNull);
  //   // console.log("User Not logged In");
  //   return this.appSettingsSubject;
  // }

  setUserData(user){
    this.appSettingsSubject.next(user);
  }

  getUserFirebaseSettings(user: any) {
    return this.dataService.loadUserSettingsFromFirebase(user);
    // return of(appStateNull);
  }

  // saveUserSettingsToFirebase(payload: any) {
  //   return this.dataService.saveUserSettingsToFirebase(
  //     this.appSettingsSubject.value
  //   );
  // }

  getDefaultAppSettings(): Observable<appState> {
    if (this.localStorageService.doesExists()) {
      const data = this.localStorageService.retrieve();
      this.appSettingsSubject.next(data);
      return this.appSettingsSubject;
    } else {
      return this.appSettingsSubject;
    }
  }

  getAppUser(): Observable<any> {
    // this.appSettingsSubject.next(appStateFirebaseAnonymous);
    // console.log("User logged In");
    return this.appSettingsSubject;
  }

  getAppUserSettings(): Observable<appState> {
    const auth$ = this.getAppUser();
    return auth$.pipe(
      take(1),
      tap((authUser) => {
        console.log(authUser);
      }),
      switchMap((user: appState) => {
        if (user && user.uid) {
          return this.getUserFirebaseSettings(user).pipe(
            tap((locationSettingsResponse: any) => {
              console.log(locationSettingsResponse);
              // this.appSettingsSubject.next(locationSettingsResponse);
            })
          );
        } else {
          return this.getDefaultAppSettings();
        }
      })
    );
  }

  // saveToLocalStorage(payload: appSettingsState) {
  //   this.localStorageService.store(payload);
  // }

  // retrieveFromLocalStorage(): appSettingsState {
  //   return this.localStorageService.retrieve();
  // }

  // clearFromLocalStorage() {
  //   this.localStorageService.clearSettingsHelper();
  // }

  // updateUserObject(props: any) {
  //   // this.userSubject.pipe(take(1)).subscribe(user => {
  //   //   const newUser = {
  //   //     ...user,
  //   //     ...props,
  //   //   };
  //   //   this.userSubject.next(newUser);
  //   // });
  // }

  // updateClaimsUserObject(props: any) {
  //   // this.userSubject.pipe(take(1)).subscribe(user => {
  //   //   const newUser = {
  //   //     ...user,
  //   //     ...props,
  //   //   };
  //   //   this.userSubject.next(newUser);
  //   // });
  // }

  resetState() {
    this.appSettingsSubject.next(appStateFirebaseNull);
  }

  logout(): void{
    this.resetState();
    console.log('User just signed out.');
  }
}
