import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from '../../../environments/environment';
import { ChooseAppSettingsModalComponent } from './components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from './components/signin/signin.component';
import { DemoMaterialModule } from '../../shared/demo-material-module';


@NgModule({
  declarations: [
    SigninComponent,
    ChooseAppSettingsModalComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,   
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,

  ],
  exports: [
    SigninComponent,
    ChooseAppSettingsModalComponent,
    AngularFireModule,
    AngularFireAuthModule,   
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
})
export class FirebaseModule {}