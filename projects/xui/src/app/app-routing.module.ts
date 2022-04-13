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
        redirectTo: 'about',
        pathMatch: 'full'
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
          import('./modules/home/setup.module').then((m) => m.SetupModule)
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
        path: 'about',
        component: AboutComponent
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
    redirectTo: 'about'
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
