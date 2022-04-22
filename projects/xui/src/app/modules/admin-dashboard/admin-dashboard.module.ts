import { AdminOtherComponent } from './components/admin-other/admin-other.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminDashboardLeftMenuComponent } from './containers/admin-dashboard-left-menu/admin-dashboard-left-menu.component';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../shared/demo-material-module';
import { AdminNetainfoComponent } from './components/admin-netainfo/admin-netainfo.component';
import { NonLiveNetasComponent } from './components/non-live-netas/non-live-netas.component';
import { PickListModule } from 'primeng/picklist';


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
    AdminDashboardRoutingModule,
    // TranslateModule.forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: httpLoaderFactory,
    //     deps: [HttpClient]
    //   },
    //   isolate: true
    // }),
    CommonModule,
    DemoMaterialModule,
    SharedModule,
    PickListModule
  ],
  declarations: [
    AdminDashboardComponent,
    AdminDashboardLeftMenuComponent,
    AdminHomeComponent,
    AdminOtherComponent,
    AdminNetainfoComponent,
    NonLiveNetasComponent
  ],
  providers: []
})
export class AdminDashboardModule {
  constructor() { }
}
