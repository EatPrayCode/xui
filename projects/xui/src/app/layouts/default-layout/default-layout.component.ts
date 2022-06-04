import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable, of } from 'rxjs';

import {
  AppState,
  routeAnimations
} from './../../core/core.module';
import { ChooseAppSettingsModalComponent } from './../../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from '../../core/auth/components/auth/signin.component';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Store } from '@ngrx/store';
import { environment as env } from './../../../environments/environment';
import { AppService } from '../../services/app.service';
import { UserService } from '../../services/user.service';
import { actionInitialiseSettings } from '../../core/settings/settings.actions';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = 'env.versions.app';
  year = new Date().getFullYear();
  logo = 'assets/whole-fish.png';
  languages = [
    { value: 'en', label: 'English' },
    { value: 'telugu', label: 'Telugu' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'kannada', label: 'Kannada' }
  ];
  // languages = this.languagesTemp.map(ele => {
  //   return ele.value;
  // });

  loaderMode: any = 'indeterminate';
  navigation: any = [
    {
      link: 'home',
      label: 'app.menu.home',
      icon: 'person'
    },
    {
      link: 'news',
      label: 'app.menu.news',
      icon: 'home'
    },
    {
      link: 'reddit-client',
      label: 'app.menu.reddit-content',
      icon: 'trip_origin'
    },
    {
      link: 'settings',
      label: 'app.menu.settings',
      icon: 'settings'
    },
  ];
  navigationSideMenu = [
    ...this.navigation,
    {
      link: 'dashboard',
      label: 'app.menu.dashboard',
      icon: 'person'
    },
    {
      link: 'netas',
      label: 'app.menu.netas',
      icon: 'phone'
    },
    // {
    //   link: 'visualize',
    //   label: 'app.menu.visualise',
    //   icon: 'cog'
    // },
    {
      link: 'youtube-content',
      label: 'app.menu.youtube-content',
      icon: 'theaters'
    },
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
    private userService: UserService,
    private store: Store<AppState>,
  ) { }

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
    this.user$ = this.appService.appSettingsSubject;
    this.stickyHeader$ = this.appService.stickyHeader$
    this.language$ = this.appService.language$;
    this.theme$ = this.appService.theme$;
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
      // console.log(result, 'The dialog was closed');
    });
  }

  openLoginDialog(): void {
    const config: MatDialogConfig = {
      disableClose: false,
      hasBackdrop: true,
      backdropClass: '',
      height: '100vh',
      minWidth: '90%',
      position: {
        right: '0px',
        bottom: '0px'
      },
      panelClass: 'makeItMiddle',
      data: {
        obj: {}
      }
    };
    let dialogRef = this.dialog.open(SigninComponent, config);
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(result, 'The dialog was closed');
    });
  }

  onLogoutClick() {
    this.appService.logout();
  }

  onLanguageSelect(event: MatSelectChange) {
    this.appService.onLanguageSelect(event.value);
  }
}
