import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable, of } from 'rxjs';

import { environment as env } from './../../environments/environment';

import {
  routeAnimations
} from './../core/core.module';
import { ChooseAppSettingsModalComponent } from './../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from './../core/auth/components/signin/signin.component';
import { AppService } from '../services/app.service';
import { appState } from '../models/app.state';
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
  logo = 'assets/logo.png';
  languages = ['en', 'fr', 'es'];
  navigation: any = [
    {
      link: 'netas',
      label: 'app.menu.netas',
      icon: 'book-open'
    },
    {
      link: 'dashboard',
      label: 'app.menu.dashboard',
      icon: 'bullhorn'
    },
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
    {
      link: 'about',
      label: 'app.menu.about',
      icon: 'link'
    }
  ];
  navigationSideMenu = [
    ...this.navigation,
    {
      link: 'settings',
      label: 'app.menu.settings',
      icon: 'github'
    },
    {
      link: 'preferences',
      label: 'app.menu.settings',
      icon: 'github'
    }
  ];

  isAuthenticated$: Observable<boolean> | undefined;
  stickyHeader$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;

  user$: Observable<any> = of(null);

  constructor(
    private dialog: MatDialog,
    public appService: AppService
  ) { }

  ngOnInit(): void {
    this.initApp();
  }

  initApp() {
    this.appService.initAppService();
    this.user$ = this.appService.user$;
    this.isAuthenticated$ = this.appService.isAuthenticated$;
    this.stickyHeader$ = this.appService.stickyHeader$
    this.language$ = this.appService.language$;
    this.theme$ = this.appService.theme$;
    this.user$.subscribe(res => {
      console.log(res);
    })
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

  onLoginClick() { }

  onLogoutClick() {
    this.appService.logout();
  }

  onLanguageSelect(event: MatSelectChange) {
    this.appService.onLanguageSelect(event.value);
  }
}
