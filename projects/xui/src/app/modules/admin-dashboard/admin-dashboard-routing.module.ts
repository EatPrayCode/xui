import { NonLiveNetasComponent } from './components/non-live-netas/non-live-netas.component';
import { AdminNetainfoComponent } from './components/admin-netainfo/admin-netainfo.component';
import { AdminOtherComponent } from './components/admin-other/admin-other.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-other',
        pathMatch: 'full'
      },
      {
        path: 'admin-other',
        component: NonLiveNetasComponent,
        data: { title: 'app.dashboard.other' },
      },
      {
        path: 'admin-home',
        component: NonLiveNetasComponent,
        data: { title: 'app.dashboard.other' },
      },
      {
        path: 'admin-netainfo',
        component: AdminNetainfoComponent,
        data: { title: 'app.dashboard.netainfo' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
