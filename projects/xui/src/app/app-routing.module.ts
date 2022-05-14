import { RedditLayoutComponent } from './layouts/reddit-layout/reddit-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { NetaLayoutComponent } from './layouts/neta-layout/neta-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'reddit-content',
        loadChildren: () =>
          import('./modules/reddit-content/app.module').then(
            (m) => m.AppModule
          )
      },
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
      {
        path: 'netas',
        loadChildren: () =>
          import('./modules/netas/netas.module').then((m) => m.NetasModule)
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
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.SetupModule)
      },

    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'youtube-content',
        loadChildren: () =>
          import('./modules/youtube-content/youtube-content.module').then((m) => m.YoutubeContentModule)
      },
    ]
  },
  {
    path: '',
    component: NetaLayoutComponent,
    children: [
      {
        path: ':id',
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
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
