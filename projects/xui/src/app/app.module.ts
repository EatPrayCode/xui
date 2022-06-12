import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AboutComponent } from './modules/about/about.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { CartIconComponent } from './shared/cart-icon/cart-icon.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedditLayoutComponent } from './layouts/reddit-layout/reddit-layout.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import { SettingsLayoutComponent } from './layouts/settings-layout/settings-layout.component';
import { HomeComponent } from './modules/home/home/home.component';

@NgModule({
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),

    // core
    CoreModule,
    SharedModule,

    AppRoutingModule,
    ReactiveFormsModule,

    // app
    AppRoutingModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [
    AppComponent,
    BlankComponent,
    AboutComponent,
    LandingLayoutComponent,
    DefaultLayoutComponent,
    CartIconComponent,
    RedditLayoutComponent,
    NotFoundComponent,
    SettingsLayoutComponent,
    HomeComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useValue: () => new Promise(resolve =>
        setTimeout(resolve, 1000)
      ),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
