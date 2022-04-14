import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-settings-netas',
  templateUrl: './settings-netas.component.html',
  styleUrls: ['./settings-netas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsNetasComponent implements OnInit {

  allNetas: any = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  selected = false;
  
  onSelectCard() {
    this.selected = !this.selected;
  }

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
