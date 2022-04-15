import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
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
        path: 'admin-dashboard',
        loadChildren: () =>
          import('./modules/admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule)
      },
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./modules/neta/neta.module').then((m) => m.NetaModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
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
export class AppRoutingModule {}
