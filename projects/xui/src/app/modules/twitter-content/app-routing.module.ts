import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthenticateComponent } from "./authenticate/authenticate.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoggedInGuard } from "./logged-in-guard.guard";
import { LoggedOutGuard } from "./logged-out-guard.guard";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { SubmitComponent } from "./submit/submit.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'reddit-dashboard',
        pathMatch: 'full'
      },
      {
        path: "reddit-dashboard",
        component: DashboardComponent
      },
      { path: "login", component: LoginComponent, canActivate: [LoggedOutGuard] },
      {
        path: "authenticate",
        component: AuthenticateComponent,
        canActivate: [LoggedOutGuard]
      },
      {
        path: "logout",
        component: LogoutComponent,
        canActivate: [LoggedInGuard]
      },
      {
        path: "post",
        component: SubmitComponent,
        pathMatch: "full",
        canActivate: [LoggedInGuard]
      },
      { path: "r/:subreddit", component: DashboardComponent },
      {
        path: "r/:subreddit/post",
        component: SubmitComponent,
        canActivate: [LoggedInGuard]
      },
      { path: "r/:subreddit/:postid", component: DashboardComponent },
      {
        path: "r/:subreddit/comments/:postid/:postname",
        component: DashboardComponent,
        pathMatch: "full"
      },
    ]
  },
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  //copy reddit's exact syntax for users who copypaste
  { path: "**", redirectTo: "/twitter-content/reddit-dashboard" }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
