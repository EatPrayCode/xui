import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NetasRoutingModule } from './netas-routing.module';
import { NetasComponent } from './containers/netas/netas.component';
import { SharedModule } from '../../shared/shared.module';
import { NetasForYouComponent } from './components/netas-for-you/netas-for-you.component';
import { NetasService } from './netas.service';
import { NetaListComponentV1 } from './components/feature-list/feature-list.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    NetasRoutingModule
  ],
  declarations: [NetasComponent, NetasForYouComponent, NetaListComponentV1],
  providers: [NetasService]
})
export class NetasModule {
  constructor() {}
}
