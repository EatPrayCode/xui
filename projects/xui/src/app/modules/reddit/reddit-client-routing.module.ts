import { RedditClientComponent } from './containers/reddit-client/reddit-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditLandingComponent } from './components/reddit-landing/reddit-landing.component';
import { LoginComponent } from './components/login/login.component';
import { RedditLoggedOutGuard } from '~/app/services/reddit-logged-out-guard.guard';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RedditLoggedInGuard } from '~/app/services/reddit-logged-in-guard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RedditClientComponent,
    children: [
      {
        path: '',
        redirectTo: 'reddit-landing',
        pathMatch: 'full'
      },
      {
        path: 'reddit-landing',
        component: RedditLandingComponent,
        data: { title: 'app.dashboard.other' },
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedditClientRoutingModule { }
