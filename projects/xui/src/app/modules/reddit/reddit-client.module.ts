import { RedditClientComponent } from './containers/reddit-client/reddit-client.component';
import { RedditClientLeftMenuComponent } from './containers/reddit-client-left-menu/reddit-client-left-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../shared/demo-material-module';
import { PickListModule } from 'primeng/picklist';
import { RedditClientRoutingModule } from './reddit-client-routing.module';
import { RedditLandingComponent } from './components/reddit-landing/reddit-landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';


export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/dashboard/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    DemoMaterialModule,
    SharedModule,
    PickListModule,
    FormsModule,
    ReactiveFormsModule,
    RedditClientRoutingModule
  ],
  declarations: [
    RedditClientLeftMenuComponent,
    RedditClientComponent,
    RedditLandingComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    AuthenticateComponent
  ],
  providers: []
})
export class RedditClientModule {
  constructor() { }
}
