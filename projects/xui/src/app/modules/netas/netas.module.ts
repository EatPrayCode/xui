import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NetasRoutingModule } from './netas-routing.module';
import { NetasComponent } from './containers/netas/netas.component';
import { SharedModule } from '../../shared/shared.module';
import { NetasForYouComponent } from './components/netas-for-you/netas-for-you.component';
import { environment } from '../../../environments/environment';
import { NetasService } from './netas.service';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/netas/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    NetasRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [NetasComponent, NetasForYouComponent],
  providers: [NetasService]
})
export class NetasModule {
  constructor() {}
}
