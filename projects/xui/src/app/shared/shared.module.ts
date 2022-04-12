import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DemoMaterialModule } from './demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { AppSpinnerDirective } from './directives/app-spinner';
import { SpinnerComponent } from './directives/spinner/spinner.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,

    DemoMaterialModule,
    RouterModule,
  ],
  declarations: [
    SpeedDialFabComponent,
    SpinnerComponent,
    AppSpinnerDirective,
    NotFoundComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DemoMaterialModule,

    SpeedDialFabComponent,
    SpinnerComponent,
    AppSpinnerDirective,
    NotFoundComponent
  ]
})
export class SharedModule {
  constructor() {}
}
