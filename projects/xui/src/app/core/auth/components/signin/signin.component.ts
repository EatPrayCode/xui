import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../../../../services/app.service';

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
    private router: Router,
    private fb: FormBuilder,
    private ref: MatDialogRef<SigninComponent>,
    public appService: AppService
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
    this.appService.signInAnonymously().then((result) => {
      this.doClaimsNavigation(result);
    });
  }

  signInWithGoogle() {
    this.appService.signInWithGoogle().then((result: any) => {
      this.doClaimsNavigation(result);
    });
  }

  setUserData(user: any) {
    this.appService.setUserData(user);
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
