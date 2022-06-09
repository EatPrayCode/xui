import { AppService } from '../../../../services/app.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

  errorMessage!: string;
  showLogin: any = true;
  showRegister: any = false;

  currentPage: any = 1;

  close(): void {
    this.ref.close();
  }

  constructor(private ref: MatDialogRef<SigninComponent>,
    public appService: AppService,
    public userService: UserService,) { }

  ngOnInit() { }

  goTo(event) {
    if (event == 'Guest') {
      this.signInAnonymously();
    }
    else if (event == 'Signin') {
      this.currentPage = 1;
    }
    else if (event == 'Register') {
      this.currentPage = 2;
    }
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
      this.RegisterNeta(event);
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

  // ).then((result) => {
  //   this.handleCreateNetaId(result.user, username);
  //   this.closeAuthDialog(result);
  // });

  RegisterNeta(event) {
    const { email, password, username } = event;
    this.registerWithPassword(email, password).then(res => {
      const user = res.user;
      this.userService.addUserName(username, user).then(res => {

      });
    },
      err => {
        console.log(err, "error occured")
      });
  }

  registerWithPassword(email, password) {
    return this.appService.registerWithPassword(email, password);
  }

  handlePasswordForgot() {
  }

  handleCreateNetaId($event, username) {
    const { uid } = $event;
    this.appService.signInPassword(uid, username);
  }

  handleRegisterClick() {
    this.showLogin = false;
    this.showRegister = true;
  }

  handleSigninClick() {
    this.showLogin = true;
    this.showRegister = false;
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
    // console.log('\Closed auth dialog...');
  }
}
