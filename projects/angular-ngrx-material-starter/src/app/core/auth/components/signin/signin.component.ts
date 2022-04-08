import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '../../../../services/state.service';
export type loginAction =
  | 'register'
  | 'signIn'
  | 'forgotPassword'
  | 'changePassword'
  | 'changeEmail'
  | 'delete'
  | 'signOut';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  errorMessage = '';
  loading = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private afStore: AngularFirestore,
    private ref: MatDialogRef<SigninComponent>,
    @Inject(MAT_DIALOG_DATA) private action: loginAction,
    public stateService: StateService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [
        'test@test.com',
        Validators.compose([Validators.required, Validators.email])
      ],
      password: ['testpassword', Validators.compose([Validators.required])]
    });
  }

  signInAnonymously() {
    this.authService.signInAnonymously().then((result) => {
      this.doClaimsNavigation(result);
    });
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle().then((result: any) => {
      this.doClaimsNavigation(result);
    });
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

  togglePhoneSignIn() {
    this.router.navigate(['/login-mobile']);
  }

  doClaimsNavigation(result: any) {
    this.setUserData(result.user);
    this.ref.close(result.user);
    console.log('\nWaiting for claims navigation...');
  }
}
