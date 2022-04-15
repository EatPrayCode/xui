import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './containers/connect/connect.component';
import { ConnectHomeComponent } from './components/connect-home/connect-home.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectComponent,
    children: [
      {
        path: '',
        redirectTo: 'connect-home',
        pathMatch: 'full'
      },
      {
        path: 'connect-home',
        component: ConnectHomeComponent,
        data: { title: 'app.connect.menu.connect-home' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
