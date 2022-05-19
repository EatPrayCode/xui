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
        redirectTo: 'news-for-you',
        pathMatch: 'full'
      },
      {
        path: 'news-party',
        component: NetasForYouComponent,
        data: { title: 'app.netas.tab.netas-party' }
      },
      {
        path: 'news-for-you',
        component: NetasForYouComponent,
        data: { title: 'app.netas.tab.netas-for-you' }
      },
      {
        path: 'news-national',
        component: NetasForYouComponent,
        data: { title: 'app.netas.tab.netas-national' }
      },
      {
        path: 'news-by-state',
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
