import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsNetasComponent } from './components/settings-netas/settings-netas.component';
import { SettingsGeneralComponent } from './components/settings-general/settings-general.component';
import { SettingsContainerComponent } from './containers/settings-container/settings-container.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      },
      {
        path: 'general',
        component: SettingsGeneralComponent
      },
      {
        path: 'preferences',
        component: SettingsNetasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
