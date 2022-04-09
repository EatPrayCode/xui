import { NetasForYouComponent } from './components/netas-for-you/netas-for-you.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetasComponent } from './containers/netas/netas.component';

const routes: Routes = [
  {
    path: '',
    component: NetasComponent,
    children: [
      {
        path: '',
        redirectTo: 'netas-top',
        pathMatch: 'full'
      },
      {
        path: 'netas-top',
        component: NetasForYouComponent,
        data: { title: 'app.netas.menu.netas-top' }
      },
      {
        path: 'netas-for-you',
        component: NetasForYouComponent,
        data: { title: 'app.netas.menu.netas-for-you' }
      },
      {
        path: 'netas-national',
        component: NetasForYouComponent,
        data: { title: 'app.netas.menu.netas-national' }
      },
      {
        path: 'netas-by-state',
        component: NetasForYouComponent,
        data: { title: 'app.netas.menu.netas-by-state' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetasRoutingModule {}
