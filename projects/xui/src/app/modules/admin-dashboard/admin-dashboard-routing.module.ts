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
        component: AdminHomeComponent,
        data: { title: 'app.connect.menu.connect-home' },
      },
      {
        path: 'admin-home',
        component: AdminOtherComponent,
        data: { title: 'app.connect.menu.connect-home' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
