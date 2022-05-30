import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DemoMaterialModule } from './demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { AppSpinnerDirective } from './directives/app-spinner';
import { SpinnerComponent } from './directives/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    DemoMaterialModule,
    RouterModule,
    FlexLayoutModule,
  ],
  declarations: [
    SpeedDialFabComponent,
    SpinnerComponent,
    AppSpinnerDirective
  ],
  exports: [
    CommonModule,
    TranslateModule,
    DemoMaterialModule,
    SpeedDialFabComponent,
    SpinnerComponent,
    AppSpinnerDirective,
    FlexLayoutModule,
  ]
})
export class SharedModule {
  constructor() {}
}
