import { onMainContentChange } from './../../animations/animations';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  routeAnimations, ROUTE_ANIMATIONS_ELEMENTS
} from '../../../../core/core.module';
import { SidenavService } from '../../../../core/services/sidenav.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  animations: [onMainContentChange],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  mainMenuItems: any = [
    {
      id: 'connect-home',
      link: '/connect/connect-home',
      name: 'Home',
      label: 'app.dashboard.connect-home'
    },
    {
      id: 'connect-other',
      link: '/connect/connect-home',
      name: 'Other',
      label: 'app.dashboard.connect-other'
    }
  ];
  selectedType: any;

  handleClickMainMenuItem(item: any) {
    this.selectedType = item;
  }

  public onSideNavChange: boolean = false;

  onSequenceChangeEvent(event: MatTabChangeEvent) {
    // console.log(event.index);
    let link: any = this.mainMenuItems[event.index].link;
    let currentUrl: any = `/netas/${link}`;
    this.router.navigate([currentUrl]);
  }


  constructor(private _sidenavService: SidenavService, private router: Router) {
    this._sidenavService.sideNavState$.subscribe((res) => {
      this.onSideNavChange = res;
      if (res == true) {
        console.log('Opened');
      } else if (res == false) {
        console.log('Closed');
      }
    });
    // this.handleSelectNeta({});
  }

  ngOnInit(): void { }

  handleSelectNeta(neta: any) {
    let netaId: any = neta.id || 'DEFAULT';
    this.router.navigate([`/connect/connect-history/${netaId}`]);
  }

}
