import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input
} from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../../../core/core.module';

import { Feature, features } from '../netas-list.data';

@Component({
  selector: 'app-netas-list',
  templateUrl: './netas-list.component.html',
  styleUrls: ['./netas-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetasListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;
  @Output() viewNetaDetails = new EventEmitter();
  @Output() connectNeta = new EventEmitter();
  @Input() netas: any;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }

  openNetaDetails(payload: any) {
    this.viewNetaDetails.emit(payload);
  }

  connectWithNeta(payload: any) {
    this.connectNeta.emit(payload);
  }
}
