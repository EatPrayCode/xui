import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AboutComponent } from './modules/about/about.component';

import { NetaDateLoadGuard } from './services/neta-data-load-guard.guard';
import { BlankComponent } from './layouts/blank/blank.component';
import { SettingsLayoutComponent } from './layouts/settings-layout/settings-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          )
      },
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [

      {
        path: 'netas',
        loadChildren: () =>
          import('./modules/netas/netas.module').then((m) => m.NetasModule)
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./modules/news/news.module').then((m) => m.NewsModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./modules/contacts/contacts.module').then((m) => m.ContactsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule)
      },
      {
        path: 'reddit-client',
        loadChildren: () =>
          import('./modules/reddit/reddit-client.module').then((m) => m.RedditClientModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/reddit/reddit-client.module').then((m) => m.RedditClientModule)
      },
      {
        path: 'youtube-content',
        loadChildren: () =>
          import('./modules/youtube-content/youtube-content.module').then((m) => m.YoutubeContentModule)
      },
      {
        path: 'rss-reader',
        loadChildren: () =>
          import('./modules/rss-reader/app.module').then((m) => m.AppModule)
      }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: ':id',
        // canActivate: [ NetaDateLoadGuard ],
        loadChildren: () =>
          import('./modules/neta/neta.module').then((m) => m.NetaModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      // preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
      // useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
