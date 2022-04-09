import { delay, switchMap, tap } from 'rxjs/operators';
import { appState, appStateFirebaseAnonymous, appStateFirebaseNull, appStateFirebaseSample, userSettings, userSettingsAnonymous, userSettingsNull, userSettingsSample } from './../models/app.state';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { HttpClient } from '@angular/common/http';

import firebase from 'firebase/app';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(
    private afAuth: AngularFireAuth,
    public afStore: AngularFirestore
  ) {
    // this.logout();
  }

  signInWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signInAnonymously() {
    return this.afAuth.signInAnonymously();
  }

  getAppUserSettings(): Observable<appState> {
    const auth$ = this.getUserFirebase();
    return auth$.pipe(
      switchMap((user: appState) => {
        if (user && user.uid) {
          return this.getUserSettings(user);
        }
        else {
          return this.getDefaultAppSettings();
        }
      })
    );
  }

  getUserSettings(user: any): Observable<any> {
    return this.afStore.doc<any>(`users/${user.uid}`).get().pipe(
      switchMap((snapshot: DocumentSnapshot<any>) => {
        const test = snapshot.data();
        console.log(test);
        return of(user);
      }));
  }

  getUserFirebase(): any {
    return this.afAuth.authState;
  }

  handleAuthJourney(authUser: any) {
    authUser.getIdTokenResult()
      .then((idTokenResult: any) => {
        const claims = idTokenResult.claims;
      });
  }

  getDefaultAppSettings(): Observable<appState> {
    return of(appStateFirebaseNull);
  }

  logout() {
    return this.afAuth.signOut();
  }
}
