import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeContentRoutingModule } from './youtube-content-routing.module';
import { YoutubeContentContainerComponent } from './containers/youtube-content-container/youtube-content-container.component';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
  declarations: [
    YoutubeContentContainerComponent,
  ],
  imports: [
    CommonModule,
    YoutubeContentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class YoutubeContentModule { }
