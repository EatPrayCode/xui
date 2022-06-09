import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import { State } from '../../../../core/settings/settings.model';
import { DefaultSettings } from '../../models';
import { DataService } from '~/app/services/data.service';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  sideNavItems: any = DefaultSettings;

  constructor() { }

  ngOnInit(): void {}

}
