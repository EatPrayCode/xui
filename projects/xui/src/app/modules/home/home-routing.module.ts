import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RedditLoggedInGuard } from '~/app/services/reddit-logged-in-guard.guard';
import { RedditLoggedOutGuard } from '~/app/services/reddit-logged-out-guard.guard';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home.component';
import { RedditLandingComponent } from './reddit-landing/reddit-landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: "", component: RedditLandingComponent },
    { path: "login", component: LoginComponent, canActivate: [RedditLoggedOutGuard] },
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
    { path: "dashboard", component: DashboardComponent },
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
