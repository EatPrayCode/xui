import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NetasRoutingModule } from './netas-routing.module';
import { NetasComponent } from './containers/netas/netas.component';
import { SharedModule } from '../../shared/shared.module';
import { NetasForYouComponent } from './components/netas-for-you/netas-for-you.component';
import { NetasService } from './netas.service';
import { NetasByStateComponent } from './components/netas-by-state/netas-by-state.component';
import { NetasByNationalComponent } from './components/netas-by-national/netas-by-national.component';
import { NetasByPartyComponent } from './components/netas-by-party/netas-by-party.component';
import { NetasListComponent } from './components/netas-list/netas-list.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    NetasRoutingModule
  ],
  declarations: [NetasComponent, NetasForYouComponent, NetasByStateComponent, NetasByNationalComponent, NetasByPartyComponent, NetasListComponent],
  providers: [NetasService]
})
export class NetasModule {
  constructor() {}
}
