import { MiniPlayerComponent } from './layouts/app/mini-player/mini-player.component';
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
import { AboutComponent } from './about/about.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { CartIconComponent } from './layouts/components/cart-icon/cart-icon.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgxAirtableModule } from 'ngx-airtable';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layouts/app/header/header.component';
import { SidebarComponent } from './layouts/app/sidebar/sidebar.component';
import { AccountSidebarComponent } from './layouts/app/account-sidebar/account-sidebar.component';
import { BrandIconComponent, NotFoundPageModule, SearchBoxMobileModule, SearchBoxModule, VideoPlayerComponent, VideoThumbnailLoaderModule, VideoThumbnailModule } from './layouts/lib/components';
import { MiniSidebarComponent } from './layouts/app/mini-sidebar/mini-sidebar.component';
import { BrowseVideosComponent } from './layouts/app/browse-videos/browse-videos.component';
import { HomeComponent } from './layouts/app/home/home.component';
import { APP_CONFIG, YOUTUBE_API_KEY, YOUTUBE_SERVICE } from './layouts/lib/tokens';
import { YoutubeServiceV2 } from './layouts/lib/services';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { NxWelcomeComponent } from './layouts/app/nx-welcome.component';

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
    VideoThumbnailModule,
    NotFoundPageModule,
    SearchBoxMobileModule,
    MatMenuModule,
    AppRoutingModule,
    VideoThumbnailLoaderModule,
    SearchBoxMobileModule,

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
    HeaderComponent,
    SidebarComponent,
    AccountSidebarComponent,
    BrandIconComponent,
    MiniSidebarComponent,
    BrowseVideosComponent,
    VideoPlayerComponent,
    HomeComponent,
    MiniPlayerComponent,
    NxWelcomeComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER, 
      useValue: () =>  new Promise(resolve =>
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
