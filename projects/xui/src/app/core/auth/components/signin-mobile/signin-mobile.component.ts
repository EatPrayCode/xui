import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import firebase from 'firebase/app';
import { AuthService } from '../../auth.service';
import { WindowService } from '../../window.service';

@Component({
  selector: 'app-signin-mobile',
  templateUrl: './signin-mobile.component.html',
  styleUrls: ['./signin-mobile.component.scss']
})
export class SigninMobileComponent implements OnInit, AfterViewInit {
  phoneNumber: any = '';
  otp: string = '';
  windowRef: any;
  disableotpsendbtn = true;

  constructor(
    private windowService: WindowService,
    private afAuth: AngularFireAuth,
    private authservice: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }

  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'normal',
        callback: (response: any) => {
          this.disableotpsendbtn = false;
        }
      }
    );
    this.windowRef.recaptchaVerifier.render();
  }

  sendOTP() {
    this.afAuth
      .signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier)
      .then((confirmationResult) => {
        this.windowRef.confirmationResult = confirmationResult;
      });
  }

  verifyPTP() {
    this.windowRef.confirmationResult
      .confirm(this.otp)
      .then((userCredentials: any) => {
        this.router.navigate(['/']);
      });
  }
}
