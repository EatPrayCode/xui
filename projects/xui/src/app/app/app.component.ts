import { MatDialog } from '@angular/material/dialog';
import browser from 'browser-detect';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { environment as env } from './../../environments/environment';

import {
  routeAnimations,
  LocalStorageService,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
  AppState
} from './../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from './../core/settings/settings.actions';
import { ChooseAppSettingsModalComponent } from './../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from './../core/auth/components/signin/signin.component';
import { StateService } from './../services/state.service';
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
      link: 'connect',
      label: 'app.menu.connect',
      icon: 'envelope'
    },
    {
      link: 'netas',
      label: 'app.menu.netas',
      icon: 'book-open'
    },
    // {
    //   link: 'dashboard',
    //   label: 'app.menu.dashboard',
    //   icon: 'bullhorn'
    // },
    {
      link: 'admin-dashboard',
      label: 'app.menu.admin-dashboard',
      icon: 'user'
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

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private dialog: MatDialog,
    public stateService: StateService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name || '');
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = of(false);
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
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

  onLoginClick() {}

  onLogoutClick() {
    this.stateService.logout();
  }

  onLanguageSelect(event: MatSelectChange) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language: event.value })
    );
  }
}
