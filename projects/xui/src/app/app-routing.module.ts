import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlankComponent } from './layouts/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
        // loadChildren: () =>
        //   import('./features/about/about.module').then((m) => m.AboutModule)
      },
      {
        path: 'feature-list',
        loadChildren: () =>
          import('./features/feature-list/feature-list.module').then(
            (m) => m.FeatureListModule
          )
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.module').then(
            (m) => m.SettingsModule
          )
      },
      {
        path: 'examples',
        loadChildren: () =>
          import('./features/examples/examples.module').then(
            (m) => m.ExamplesModule
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
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
