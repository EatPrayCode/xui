import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../../../environments/environment';
import { ChooseAppSettingsModalComponent } from './components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninMobileComponent } from './components/signin-mobile/signin-mobile.component';
import { SigninComponent } from './components/signin/signin.component';
import { DemoMaterialModule } from '../../shared/demo-material-module';

@NgModule({
  declarations: [
    SigninComponent,
    SigninMobileComponent,
    ChooseAppSettingsModalComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    SigninComponent,
    SigninMobileComponent,
    ChooseAppSettingsModalComponent
  ]
})
export class FirebaseModule {}
