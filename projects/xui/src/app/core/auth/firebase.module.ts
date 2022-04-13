import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ChooseAppSettingsModalComponent } from './components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from './components/signin/signin.component';
import { DemoMaterialModule } from '../../shared/demo-material-module';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';


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