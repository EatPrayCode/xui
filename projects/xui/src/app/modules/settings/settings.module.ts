import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsGeneralComponent } from './components/settings-general/settings-general.component';
import { SettingsNetasComponent } from './components/settings-netas/settings-netas.component';
import { SettingsContainerComponent } from './containers/settings-container/settings-container.component';
import { SettingsContentComponent } from './components/settings-content/settings-content.component';

@NgModule({
  declarations: [
    SettingsContainerComponent,
    SettingsGeneralComponent,
    SettingsNetasComponent,
    SettingsContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    FormsModule
  ]
})
export class SettingsModule { }
