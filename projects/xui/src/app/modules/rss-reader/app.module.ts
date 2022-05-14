import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { CountPipe } from './pipes/count.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FeedComponent,
        PostComponent,
        CountPipe,
        SanitizeHtmlPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: []
})
export class AppModule {
}
