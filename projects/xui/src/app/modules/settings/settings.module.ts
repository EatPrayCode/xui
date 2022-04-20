import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsGeneralComponent } from './components/settings-general/settings-general.component';
import { SettingsNetasComponent } from './components/settings-netas/settings-netas.component';
import { SettingsContainerComponent } from './containers/settings-container/settings-container.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';

@NgModule({
  declarations: [
    SettingsContainerComponent,
    SettingsGeneralComponent,
    SettingsNetasComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
