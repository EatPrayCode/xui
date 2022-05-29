import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NewsService } from './news.service';
import { NewsContainerComponent } from './containers/news-container/news-container.component';
import { NewsForYouComponent } from './components/news-for-you/news-for-you.component';
import { NewsExtensiveComponent } from './components/news-extensive/news-extensive.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { SanitizeHtmlPipe } from './components/pipes/sanitize-html.pipe';
import { CountPipe } from './components/pipes/count.pipe';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    NewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    NewsContainerComponent,
    NewsForYouComponent,
    NewsExtensiveComponent,
    FeedComponent,
    PostComponent,
    CountPipe,
    SanitizeHtmlPipe
  ],
  providers: [NewsService]
})
export class NewsModule {
  constructor() { }
}
