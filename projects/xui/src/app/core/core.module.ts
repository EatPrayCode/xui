import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { environment } from '../../environments/environment';
import { DialogModule } from '@ngneat/dialog';
import {
  AppState,
  reducers,
  metaReducers,
  selectRouterState
} from './core.state';

import { TitleService } from './title/title.service';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations
} from './animations/route.animations';
import { AnimationsService } from './animations/animations.service';
import { AppErrorHandler } from './error-handler/app-error-handler.service';
import { CustomSerializer } from './router/custom-serializer';
import { LocalStorageService } from './local-storage/local-storage.service';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';
import { GoogleAnalyticsEffects } from './google-analytics/google-analytics.effects';
import { SettingsEffects } from './settings/settings.effects';
import {
  selectSettingsLanguage,
  selectEffectiveTheme,
  selectSettingsStickyHeader
} from './settings/settings.selectors';
import { MatButtonModule } from '@angular/material/button';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';

export {
  TitleService,
  routeAnimations,
  AppState,
  LocalStorageService,
  ROUTE_ANIMATIONS_ELEMENTS,
  AnimationsService,
  selectRouterState,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader
};

import {
  faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
  faPlayCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { MatDialogModule } from '@angular/material/dialog';
import { FirebaseModule } from './auth/firebase.module';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/../../assets/i18n/`,
    '.json'
  );
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    FormsModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    DialogModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([SettingsEffects, GoogleAnalyticsEffects]),
    FontAwesomeModule,
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'nconnect'
        }),

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  exports: [
    // angular
    FormsModule,
    ReactiveFormsModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,

    // 3rd party
    TranslateModule,
    FontAwesomeModule,
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    faIconLibrary: FaIconLibrary
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
    faIconLibrary.addIcons(
      faCog,
      faBars,
      faRocket,
      faPowerOff,
      faUserCircle,
      faPlayCircle,
      faGithub,
      faMediumM,
      faTwitter,
      faInstagram,
      faYoutube
    );
  }
}
