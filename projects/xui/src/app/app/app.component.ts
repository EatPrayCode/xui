import { environment } from './../../environments/environment.prod';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable, of } from 'rxjs';

import { environment as env } from './../../environments/environment';
import { initializeApp } from "firebase/app";
import {
  AppState,
  routeAnimations
} from './../core/core.module';
import { ChooseAppSettingsModalComponent } from './../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from './../core/auth/components/signin/signin.component';
import { AppService } from '../services/app.service';
import { appState } from '../models/app.state';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { User } from '../Models/User.Model';
import { Store } from '@ngrx/store';
import { actionInitialiseSettings } from '../core/settings/settings.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = 'assets/logo.webp';
  languages = ['en', 'fr', 'es'];
  loaderMode: any = 'indeterminate';
  navigation: any = [
    {
      link: 'about',
      label: 'app.menu.home',
      icon: 'mail'
    },
    {
      link: 'netas',
      label: 'app.menu.netas',
      icon: 'phone'
    },
    // {
    //   link: 'dashboard',
    //   label: 'app.menu.dashboard',
    //   icon: 'person'
    // },
    // {
    //   link: 'visualize',
    //   label: 'app.menu.visualise',
    //   icon: 'cog'
    // },
    // {
    //   link: 'blog',
    //   label: 'app.menu.blog',
    //   icon: 'blog'
    // },
    // {
    //   link: 'about',
    //   label: 'app.menu.about',
    //   icon: 'mail'
    // },
    {
      link: 'settings',
      label: 'app.menu.settings',
      icon: 'mail'
    },
  ];
  navigationSideMenu = [
    ...this.navigation,
  ];

  isAuthenticated$: Observable<boolean> | undefined;
  stickyHeader$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;

  user$: Observable<any> = of(null);
  loading: any = true;

  constructor(
    private dialog: MatDialog,
    public appService: AppService,
    private authService: AuthService,
     private userService: UserService,
     private store: Store<AppState>,
  ) {

    // const firebaseConfig = {
    //   apiKey: "AIzaSyCtUz6VvXBUAhQjwM_ehArQQOSpgUaThnc",
    //   authDomain: "perlerwyveth.firebaseapp.com",
    //   projectId: "perlerwyveth",
    //   storageBucket: "perlerwyveth.appspot.com",
    //   messagingSenderId: "707528245165",
    //   appId: "1:707528245165:web:33dd8eb0d6d2a50207eb24",
    //   measurementId: "G-NXZRD0EQ7C"
    // };

    // Initialize Firebase
    const app = initializeApp(env.firebase);
  }

  isAuth: boolean = false;
  isAuthA: boolean = false;
  user: User;

  ngOnInit(): void {
    this.initApp();
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.appService.appSettingsSubject.next(user);
        if (user.uid) {
          this.userService.getUserSettingsTestUid(user.uid).then((res: any) => {
            if (res?.settings) {
              this.store.dispatch(
                actionInitialiseSettings({ payload: res.settings })
              );
            }
          }).catch(err => {

          });
        }
      }
    });
  }

  initApp() {
    this.appService.initAppService();
    this.user$ = this.appService.appSettingsSubject;
    this.stickyHeader$ = this.appService.stickyHeader$
    this.language$ = this.appService.language$;
    this.theme$ = this.appService.theme$;
    // this.user$.subscribe(res => {
    //   // console.log(res);
    //   (res.dataLoaded && res.dataLoaded) ? this.loaderMode = 'determinate' : this.loaderMode = 'indeterminate';
    // });
  }

  openSettingsDialog(): void {
    let dialogRef = this.dialog.open(ChooseAppSettingsModalComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '90%',
      position: {
        right: '0px',
        bottom: '0px'
      },
      data: {
        obj: {}
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(SigninComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '90%',
      position: {
        right: '0px',
        bottom: '0px'
      },
      data: {
        obj: {}
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  onLogoutClick() {
    this.appService.logout();
  }

  onLanguageSelect(event: MatSelectChange) {
    this.appService.onLanguageSelect(event.value);
  }
}
