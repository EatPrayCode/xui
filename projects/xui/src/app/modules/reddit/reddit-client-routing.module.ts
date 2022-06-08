import { RedditDiscoverComponent } from './components/reddit-discover/reddit-discover.component';
import { RedditFeedComponent } from './components/reddit-feed/reddit-feed.component';
import { RedditClientComponent } from './containers/reddit-client/reddit-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditLandingComponent } from './components/reddit-landing/reddit-landing.component';
import { LoginComponent } from './components/login/login.component';
import { RedditLoggedOutGuard } from '~/app/services/reddit-logged-out-guard.guard';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RedditLoggedInGuard } from '~/app/services/reddit-logged-in-guard.guard';
import { RedditDashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RedditClientComponent,
    canActivate: [RedditLoggedInGuard],
    children: [
      {
        path: '',
        redirectTo: 'reddit-feed',
        pathMatch: 'full'
      },

      {
        path: 'reddit-feed',
        component: RedditDashboardComponent,
        data: { title: 'app.dashboard.other' },
      },
      {
        path: 'reddit-discover',
        component: RedditDiscoverComponent,
        data: { title: 'app.dashboard.other' },
      },
    ]
  },
  {
    path: 'reddit-landing',
    component: RedditLandingComponent,
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [RedditLoggedOutGuard]
  },
  {
    path: "authenticate",
    component: AuthenticateComponent,
    canActivate: [RedditLoggedOutGuard]
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [RedditLoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedditClientRoutingModule { }
