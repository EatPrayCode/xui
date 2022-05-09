import { YoutubeContentContainerComponent } from './containers/youtube-content-container/youtube-content-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeContentHomeComponent } from './components/youtube-content-home/youtube-content-home.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeContentContainerComponent,
    children: [
      {
        path: '',
        component: YoutubeContentHomeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeContentRoutingModule { }
