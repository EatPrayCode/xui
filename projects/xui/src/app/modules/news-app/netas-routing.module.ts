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
        path: 'news-national',
        component: NetasForYouComponent,
        data: { title: 'app.netas.tab.news-national' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetasRoutingModule {}
