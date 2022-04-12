import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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
    // FormsModule,
    // ReactiveFormsModule,
    // DemoMaterialModule,
    // CommonModule
  ],
  exports: [
    SigninComponent,
    ChooseAppSettingsModalComponent,
    // FormsModule,
    // ReactiveFormsModule,
    // DemoMaterialModule
  ],
})
export class FirebaseModule { }