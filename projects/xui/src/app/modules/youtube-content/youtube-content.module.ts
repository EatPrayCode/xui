import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeContentRoutingModule } from './youtube-content-routing.module';
import { YoutubeContentHomeComponent } from './components/youtube-content-home/youtube-content-home.component';
import { YoutubeContentContainerComponent } from './containers/youtube-content-container/youtube-content-container.component';
import { BrandIconComponent, NotFoundPageModule, SearchBoxMobileModule, SearchBoxModule, VideoPlayerComponent, VideoThumbnailLoaderModule, VideoThumbnailModule } from '~/app/modules/youtube-content/components';
import { AccountSidebarComponent } from './components/app/account-sidebar/account-sidebar.component';
import { BrowseVideosComponent } from './components/app/browse-videos/browse-videos.component';
import { HeaderComponent } from './components/app/header/header.component';
import { MiniPlayerComponent } from './components/app/mini-player/mini-player.component';
import { MiniSidebarComponent } from './components/app/mini-sidebar/mini-sidebar.component';
import { NxWelcomeComponent } from './components/app/nx-welcome.component';
import { SidebarComponent } from './components/app/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
  declarations: [
    YoutubeContentHomeComponent,
    YoutubeContentContainerComponent,
    HeaderComponent,
    SidebarComponent,
    AccountSidebarComponent,
    BrandIconComponent,
    MiniSidebarComponent,
    BrowseVideosComponent,
    VideoPlayerComponent,
    HomeComponent,
    MiniPlayerComponent,
    NxWelcomeComponent,
  ],
  imports: [
    CommonModule,
    VideoThumbnailModule,
    SearchBoxMobileModule,
    VideoThumbnailLoaderModule,
    SearchBoxModule,
    YoutubeContentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class YoutubeContentModule { }
