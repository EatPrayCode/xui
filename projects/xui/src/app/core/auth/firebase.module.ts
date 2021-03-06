import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ChooseAppSettingsModalComponent } from './components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from './components/auth/signin.component';
import { DemoMaterialModule } from '../../shared/demo-material-module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    SigninComponent,
    ChooseAppSettingsModalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    CommonModule
  ],
  exports: [
    SigninComponent,
    ChooseAppSettingsModalComponent,
    // FormsModule,
    // ReactiveFormsModule,
    // DemoMaterialModule,
    LoginComponent,
    RegisterComponent
  ],
})
export class FirebaseModule { }