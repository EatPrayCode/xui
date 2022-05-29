import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NetasRoutingModule } from './netas-routing.module';
import { NetasComponent } from './containers/netas/netas.component';
import { SharedModule } from '../../shared/shared.module';
import { NetasForYouComponent } from './components/netas-for-you/netas-for-you.component';
import { NetasListComponent } from './components/netas-list/netas-list.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    NetasRoutingModule
  ],
  declarations: [NetasComponent, NetasForYouComponent, NetasListComponent],
  providers: []
})
export class NetasModule {
  constructor() {}
}
