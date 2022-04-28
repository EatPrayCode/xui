import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Observable, of } from 'rxjs';
import { SigninComponent } from '../../core/auth/components/auth/signin.component';
import { ChooseAppSettingsModalComponent } from '../../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { routeAnimations } from '../../core/core.module';
import { AppState } from '../../core/core.state';
import { actionInitialiseSettings } from '../../core/settings/settings.actions';
import { AppService } from '../../services/app.service';
import { UserService } from '../../services/user.service';
import { environment as env } from './../../../environments/environment';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingLayoutComponent implements OnInit {
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
    {
      link: 'settings',
      label: 'app.menu.settings',
      icon: 'mail'
    },
    // {
    //   link: 'about',
    //   label: 'app.menu.about',
    //   icon: 'mail'
    // },
  ];
  navigationSideMenu = [
    ...this.navigation,
    {
      link: 'dashboard',
      label: 'app.menu.dashboard',
      icon: 'person'
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
      console.log(result, 'The dialog was closed');
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
      console.log(result, 'The dialog was closed');
    });
  }

  onLogoutClick() {
    this.appService.logout();
  }

  onLanguageSelect(event: MatSelectChange) {
    this.appService.onLanguageSelect(event.value);
  }
}
