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
import { NgxAirtableModule } from 'ngx-airtable';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RedditLayoutComponent } from './layouts/reddit-layout/reddit-layout.component';
import { NetaLayoutComponent } from './layouts/neta-layout/neta-layout.component';

import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TABLES } from './modules/rss-reader/constants';

export function migrationFactory() {
  return {
      2: (db, transaction) => {
          const store = transaction.objectStore(TABLES.FEEDS);
          store.createIndex('newPostIds', 'newPostIds', { unique: false });
          store.createIndex('postIds', 'postIds', { unique: false });
      }
  };
};

const dbConfig: DBConfig = {
  name: 'Stupid-RSS-Reader',
  version: 2,
  objectStoresMeta: [
      {
          store: TABLES.POSTS,
          storeConfig: { keyPath: 'id', autoIncrement: true },
          storeSchema: [
              { name: 'title', keypath: 'title', options: { unique: false } },
              { name: 'feedId', keypath: 'feedId', options: { unique: false } },
              { name: 'pubDate', keypath: 'pubDate', options: { unique: false } },
              { name: 'link', keypath: 'link', options: { unique: false } },
              { name: 'guid', keypath: 'guid', options: { unique: true } },
              { name: 'author', keypath: 'author', options: { unique: false } },
              { name: 'thumbnail', keypath: 'thumbnail', options: { unique: false } },
              { name: 'description', keypath: 'description', options: { unique: false } },
              { name: 'content', keypath: 'content', options: { unique: false } },
              { name: 'categories', keypath: 'categories', options: { unique: false } },
              { name: 'enclosure', keypath: 'enclosure', options: { unique: false } },
              { name: 'isNew', keypath: 'isNew', options: { unique: false } }
          ]
      },
      {
          store: TABLES.FEEDS,
          storeConfig: { keyPath: 'id', autoIncrement: true },
          storeSchema: [
              { name: 'url', keypath: 'url', options: { unique: true } },
              { name: 'about', keypath: 'about', options: { unique: false } },
              { name: 'newCount', keypath: 'newCount', options: { unique: false } },
              { name: 'count', keypath: 'count', options: { unique: false } },
          ]
      }
  ],
  migrationFactory    
};


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

    HttpClientJsonpModule,

    // app
    AppRoutingModule,
    NgxAirtableModule.forRoot({ apiKey: 'key3ITRiEPhABhtTC' }),

    NgxIndexedDBModule.forRoot(dbConfig),
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
    NetaLayoutComponent
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
