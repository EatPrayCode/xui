import { onMainContentChange } from './../../../../core/animations/sidenav.animations';
import { Router } from '@angular/router';
import { SidenavService } from '../../../../core/services/sidenav.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { State } from '../../../../core/settings/settings.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [onMainContentChange],
})
export class AdminDashboardComponent implements OnInit {

  isAuthenticated$: Observable<boolean> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  mainMenuItems: any = [
    {
      id: 'admin-home',
      link: 'dashboard/admin-home',
      name: 'Home',
      label: 'app.dashboard.tab.home'
    },
    {
      id: 'admin-other',
      link: 'dashboard/admin-other',
      name: 'Other',
      label: 'app.dashboard.tab.other'
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
    let currentUrl: any = `/${link}`;
    this.router.navigate([currentUrl]);
  }


  constructor(private store: Store<State>,private _sidenavService: SidenavService, private router: Router) {
    this._sidenavService.sideNavState$.subscribe((res) => {
      this.onSideNavChange = res;
      if (res == true) {
        console.log('Opened');
      } else if (res == false) {
        console.log('Closed');
      }
    });
  }

  ngOnInit(): void { }

  handleSelectNeta(neta: any) {
    let netaId: any = neta.id || 'DEFAULT';
    this.router.navigate([`/admin-dashboard/admin-home/${netaId}`]);
  }

}
