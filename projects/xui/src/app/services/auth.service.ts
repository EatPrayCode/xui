import { take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, DocumentSnapshot } from '@angular/fire/firestore';
import { FirebaseApiService } from '../core/services/firebase-api.service';
import { StateService } from '../core/services/state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public firebaseApiService: FirebaseApiService,
    public stateService: StateService
  ) { }

  init() {
    this.afAuth.authState.pipe().subscribe((authUser: any) => {
      if (authUser) {
        console.log('Auth Service says: User is logged in.');
        this.handleAuthJourney(authUser);
      } else {
        console.log('Auth Service says: no User is logged in.');
        this.handleNoAuthJourney();
        alert();
      }
    });
  }

  // init() {
  //   this.handleNoAuthJourney();
  // }

  handleAuthJourney(authUser: any) {
    authUser.getIdTokenResult().then((idTokenResult: any) => {
      const claims = idTokenResult.claims;
      this.initLoggedInAppSettingsState(claims);
    });
    this.afStore
      .doc<any>(`users/${authUser.uid}`)
      .get()
      .subscribe((snapshot: DocumentSnapshot<any>) => {
        const user = snapshot.data();
        this.stateService.updateUserObject(user);
      });
  }

  handleNoAuthJourney() {
    // this.stateService.initDefaultAppSettingsState();
  }

  initLoggedInAppSettingsState(claims: any) {
    // this.stateService.initLoggedInAppSettingsState(claims);
  }

  resetState() {
    this.stateService.resetState();
  }

  // logout(): Promise<void> {
  //   this.resetState();
  //   console.log('User just signed out.');
  //   return this.afAuth.signOut();
  // }

  signInWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signInAnonymously() {
    return this.afAuth.signInAnonymously();
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    this.stateService.appSettingsSubject.next(userData);
    return userRef.set(userData, {
      merge: true
    });
  }
}
