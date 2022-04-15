import { SettingsNetasComponent } from './components/settings-netas/settings-netas.component';
import { SettingsGeneralComponent } from './components/settings-general/settings-general.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsContainerComponent } from './containers/settings-container/settings-container.component';


const routes: Routes = [
  {
    path: '',
    component: SettingsContainerComponent,
    data: { title: 'app.menu.settings' },
    children: [
      {
        path: '',
        redirectTo: 'settings-general',
        pathMatch: 'full'
      },
      {
        path: 'settings-general',
        component: SettingsGeneralComponent,
        data: { title: 'app.settings.general.title' }
        
      },
      {
        path: 'settings-netas',
        component: SettingsNetasComponent,
        data: { title: 'app.settings.general.settings-title' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
