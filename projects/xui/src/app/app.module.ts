import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './shared/demo-material-module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAnalytics,getAnalytics } from '@angular/fire/analytics';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

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
    ReactiveFormsModule,

    DemoMaterialModule,

    // app
    AppRoutingModule
  ],
  declarations: [AppComponent, BlankComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
