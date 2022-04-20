import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
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
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          )
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.SetupModule)
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
    ]
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  {
    path: '',
    component: LandingLayoutComponent,
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
