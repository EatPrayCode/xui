import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DemoMaterialModule } from './demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TranslateModule,
    FlexLayoutModule,

    DemoMaterialModule,
    RouterModule,
    CardModule,
    ButtonModule
  ],
  declarations: [SpeedDialFabComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule,
    DemoMaterialModule,
    CardModule,
    ButtonModule,
    SpeedDialFabComponent
  ]
})
export class SharedModule {
  constructor() {}
}
