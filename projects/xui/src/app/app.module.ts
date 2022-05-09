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
import { CartIconComponent } from './layouts/components/cart-icon/cart-icon.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgxAirtableModule } from 'ngx-airtable';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { YoutubeLayoutComponent } from './layouts/youtube-layout/youtube-layout.component';
import { YOUTUBE_API_KEY, YOUTUBE_SERVICE, YoutubeServiceV2, APP_CONFIG } from './modules/youtube-content/components';

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
    HttpClientModule,

    AppRoutingModule,    
    ReactiveFormsModule,
  
    // app
    AppRoutingModule,
    NgxAirtableModule.forRoot({ apiKey: 'key3ITRiEPhABhtTC' })
  ],
  declarations: [
    AppComponent,
    BlankComponent,
    AboutComponent,
    LandingLayoutComponent,
    DefaultLayoutComponent,
    CartIconComponent,
    NotFoundComponent,
    
    YoutubeLayoutComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useValue: () => new Promise(resolve =>
        setTimeout(resolve, 1000)
      ),
      multi: true
    },
    {
      provide: YOUTUBE_API_KEY,
      useValue: environment.youtubeApiKey,
    },
    {
      provide: YOUTUBE_SERVICE,
      useClass: YoutubeServiceV2,
    },
    { provide: APP_CONFIG, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
