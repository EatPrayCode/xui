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

import { signOut } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  settings?: any;
}

import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { UserService } from './user.service';
import { signInAnonymously } from "firebase/auth";


@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {

  constructor(
    public userService: UserService
  ) { }

  signInWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  signInPassword(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  signInWithPassword(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  registerWithPassword(email, password) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  }

  signInAnonymously() {
    const auth = getAuth();
    return signInAnonymously(auth);
  }

  getUserFirebase(): any {
    // return this.userService.getUser();
  }

  getDefaultAppSettings(): Observable<appState> {
    return of(appStateFirebaseNull);
  }

  test(settings: any) {
    this.getUserFirebase().pipe(take(1)).subscribe(user => {
      if (user && user.uid) {
        // this.setUserData(user, settings);
      }
    });
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}