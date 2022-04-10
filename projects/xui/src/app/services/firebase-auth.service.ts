import { delay, switchMap, tap, take } from 'rxjs/operators';
import { appState, appStateFirebaseNull } from '../models/app.state';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { HttpClient } from '@angular/common/http';

import firebase from 'firebase/app';
import { AngularFirestore, DocumentSnapshot, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

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
    return this.afStore.doc<any>(`users/${user.uid}`).get().pipe(
      take(1),
      switchMap((snapshot: DocumentSnapshot<any>) => {
        const test = snapshot.data();
        if (test && test.settings) {
          return of(user);
        }
        else {
          return of(user);
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
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: any = {
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
    return this.afAuth.signOut();
  }
}
