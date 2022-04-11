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

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {

  userData: any; // Save logged in user data

  constructor(
    public userService: UserService
    // public afs: AngularFirestore, // Inject Firestore service
    // public afAuth: AngularFireAuth, // Inject Firebase auth service
    // public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    //   onAuthStateChanged(getAuth(),
    //   (user) => {
    //
    //   }
    // );
  }

  // signInWithGoogle() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // // Auth logic to run auth providers
  // AuthLogin(provider: any) {
  //   return this.afAuth
  //     .signInWithPopup(provider);
  // }


  signInAnonymously() {
    // return this.afAuth.signInAnonymously();
  }

  // getAppUserSettings(): Observable<appState> {
  //   const auth$ = this.getUserFirebase();
  //   return auth$.pipe(
  //     // take(1),
  //     // switchMap((user: appState) => {
  //     //   if (user && user.uid) {
  //     //     return this.getUserSettings(user);
  //     //   }
  //     //   else {
  //     //     return this.getDefaultAppSettings();
  //     //   }
  //     // })
  //   );
  // }

  // getUserSettings(user: any): Observable<appState> {
  //   return this.afs.doc<any>(`users/${user.uid}`).get().pipe(
  //     take(1),
  //     switchMap((snapshot: DocumentSnapshot<any>) => {
  //       const test = snapshot.data();
  //       if (test && test.settings) {
  //         return of({...user, userSettings: test.settings});
  //       }
  //       else {
  //         return of({...user, userSettings: null});
  //       }
  //     }));
  // }

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

  // setUserData(user: any, data) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //   );
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified,
  //     settings: data
  //   };
  //   return userRef.set(userData, {
  //     merge: true
  //   });
  // }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

    // return this.afAuth.signOut().then(() => {
    //   localStorage.removeItem('user');
    // });
  }
}