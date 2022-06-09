import { SettingsNetasComponent } from './components/settings-netas/settings-netas.component';
import { SettingsGeneralComponent } from './components/settings-general/settings-general.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsContainerComponent } from './containers/settings-container/settings-container.component';
import { SettingsContentComponent } from './components/settings-content/settings-content.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsContainerComponent,
    data: { title: 'app.menu.settings' },
    children: [
      {
        path: '',
        redirectTo: 'settings-content',
        pathMatch: 'full'
      },
      {
        path: 'settings-content',
        component: SettingsContentComponent,
        data: { title: 'app.settings.general.title' }
        
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
