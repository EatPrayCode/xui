import { FeedComponent } from './components/feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsContainerComponent } from './containers/news-container/news-container.component';
import { NewsExtensiveComponent } from './components/news-extensive/news-extensive.component';
import { NewsForYouComponent } from './components/news-for-you/news-for-you.component';

const routes: Routes = [
  {
    path: '',
    component: NewsContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'news-for-you',
        pathMatch: 'full'
      },
      {
        path: 'news-extensive',
        component: NewsExtensiveComponent
      },
      {
        path: 'news-feed/:id',
        component: FeedComponent
      },
      {
        path: 'news-for-you',
        component: NewsForYouComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
