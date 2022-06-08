import { PostCommentComponent } from './components/reddit/post-comment/post-comment.component';
import { PostFooterComponent } from './components/reddit/post-footer/post-footer.component';
import { PostVoteComponent } from './components/reddit/post-vote/post-vote.component';
import { RedditClientComponent } from './containers/reddit-client/reddit-client.component';
import { RedditClientLeftMenuComponent } from './containers/reddit-client-left-menu/reddit-client-left-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../shared/demo-material-module';
import { PickListModule } from 'primeng/picklist';
import { RedditClientRoutingModule } from './reddit-client-routing.module';
import { RedditLandingComponent } from './components/reddit-landing/reddit-landing.component';
import { RedditDashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { RedditDiscoverComponent } from './components/reddit-discover/reddit-discover.component';
import { RedditFeedComponent } from './components/reddit-feed/reddit-feed.component';
import { SubredditModalComponent } from './components/view/subreddit-modal/subreddit-modal.component';
import { PostModalComponent } from './components/view/post-modal/post-modal.component';
import { PostSubtitleComponent } from './components/reddit/post-subtitle/post-subtitle.component';
import { SafeHTMLPipe } from './components/others/safe-html.pipe';
import { CallbackPipePipe } from './components/others/callback-pipe.pipe';
import { SortPipePipe } from './components/others/sort-pipe.pipe';


export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/dashboard/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SharedModule,
    PickListModule,
    FormsModule,
    ReactiveFormsModule,
    RedditClientRoutingModule
  ],
  declarations: [
    RedditClientLeftMenuComponent,
    RedditClientComponent,
    RedditLandingComponent,
    RedditDashboardComponent,
    LoginComponent,
    LogoutComponent,
    AuthenticateComponent,
    RedditDiscoverComponent,
    RedditFeedComponent,

    PostSubtitleComponent,
    PostCommentComponent,
    PostFooterComponent,
    PostVoteComponent,
    SubredditModalComponent,
    PostModalComponent,

    SafeHTMLPipe,
    AuthenticateComponent,
    CallbackPipePipe,
    SortPipePipe,
  ],
  providers: []
})
export class RedditClientModule {
  constructor() { }
}
