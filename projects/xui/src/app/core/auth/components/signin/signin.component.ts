import { AppService } from './../../../../services/app.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  errorMessage!: string;
  showLogin: any = true;
  showRegister: any = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private ref: MatDialogRef<SigninComponent>,
    public appService: AppService,
    public userService: UserService,) { }

  ngOnInit() {
    
  }

  handleLogin(event) {
    const { email, password, username } = event;
    this.appService.signInPassword(email, password).then((result) => {
      this.closeAuthDialog(result);
    });
  }

  handleRegister(event) {
    const username = event.username;
    this.checkUserNameValidity(username).then(res => {
      this.createUserName(event);
    },
      err => {
        console.log(err);
      });
  }

  checkUserNameValidity(username: string | null) {
    return new Promise(
      (resolve, reject) => {
        this.userService.CheckUserNameValidity(username).then((querySnapshot) => {
          reject({
            status: 'NOT-AVAILABLE'
          })
        },
          err => {
            resolve({
              status: 'AVAILABLE'
            })
          });
      });
  }

  createUserName(event) {
    const { email, password, username } = event;
    this.userService.addUserName(username).then(res => {
      this.registerWithPassword(email, password);
    },
      err => {
        console.log(err,"error occured")
      });
  }

  registerWithPassword(email, password) {
    this.appService.registerWithPassword(email, password).then((result) => {
      this.closeAuthDialog(result);
    });
  }

  signInPassword(email, password, username) {
    this.appService.signInPassword(email, password).then((result) => {
      this.closeAuthDialog(result);
    });
  }

  signInAnonymously() {
    this.appService.signInAnonymously().then((result) => {
      this.closeAuthDialog(result);
    });
  }

  signInWithGoogle() {
    this.appService.signInWithGoogle().then((result: any) => {
      this.closeAuthDialog(result);
    });
  }

  closeAuthDialog(user: any) {
    this.appService.appSettingsSubject.next(user.user);
    this.ref.close(user);
    console.log('\Closed auth dialog...');
  }
}
