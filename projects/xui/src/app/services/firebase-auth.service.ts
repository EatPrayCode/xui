import { Injectable, NgZone } from '@angular/core';

import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  DocumentSnapshot,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { take, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { appState, appStateFirebaseNull } from '../models/app.state';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  settings?: any;
}


@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  signInWithGoogle() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider);
  }


  signInAnonymously() {
    return this.afAuth.signInAnonymously();
  }

  getAppUserSettings(): Observable<appState> {
    const auth$ = this.getUserFirebase();
    return auth$.pipe(
      take(1),
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

  getUserSettings(user: any): Observable<appState> {
    return this.afs.doc<any>(`users/${user.uid}`).get().pipe(
      take(1),
      switchMap((snapshot: DocumentSnapshot<any>) => {
        const test = snapshot.data();
        if (test && test.settings) {
          return of({...user, userSettings: test.settings});
        }
        else {
          return of({...user, userSettings: null});
        }
      }));
  }

  getUserFirebase(): any {
    return this.afAuth.authState;
  }

  getDefaultAppSettings(): Observable<appState> {
    return of(appStateFirebaseNull);
  }

  test(settings: any) {
    this.getUserFirebase().pipe(take(1)).subscribe(user => {
      if (user && user.uid) {
        this.setUserData(user, settings);
      }
    });
  }

  setUserData(user: any, data) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      settings: data
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}