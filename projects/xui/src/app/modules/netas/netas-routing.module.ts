import { NetasByNationalComponent } from './components/netas-by-national/netas-by-national.component';
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
        redirectTo: 'netas-for-you',
        pathMatch: 'full'
      },
      {
        path: 'netas-party',
        component: NetasForYouComponent,
        data: { title: 'app.netas.tab.netas-party' }
      },
      {
        path: 'netas-for-you',
        component: NetasForYouComponent,
        data: { title: 'app.netas.tab.netas-for-you' }
      },
      {
        path: 'netas-national',
        component: NetasByNationalComponent,
        data: { title: 'app.netas.tab.netas-national' }
      },
      {
        path: 'netas-by-state',
        component: NetasForYouComponent,
        data: { title: 'app.netas.tab.netas-by-state' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetasRoutingModule {}
