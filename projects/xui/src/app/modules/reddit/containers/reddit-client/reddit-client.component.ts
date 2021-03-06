import { onMainContentChange } from '../../../../core/animations/sidenav.animations';
import { Router } from '@angular/router';
import { SidenavService } from '../../../../core/services/sidenav.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { State } from '../../../../core/settings/settings.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-reddit-client',
  templateUrl: './reddit-client.component.html',
  styleUrls: ['./reddit-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [onMainContentChange],
})
export class RedditClientComponent implements OnInit {

  isAuthenticated$: Observable<boolean> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  mainMenuItems: any = [
    {
      id: 'Feed',
      link: '/home/reddit-feed',
      name: 'Feed',
      label: 'app.dashboard.tab.home'
    },
    {
      id: 'Discover',
      link: '/home/reddit-discover',
      name: 'Discover',
      label: 'app.dashboard.tab.home'
    },
  ];
  selectedType: any;

  sidemenuItems: any[] = [
    
    {
      link: 'https://google.com/',
      caption: 'Trending',
      info: "Google search - I'm feeling lucky.",
      CSSClass: 'icon-microsoft',
      id: 'approvednetainfo'
    },
    {
      link: 'https://google.com/',
      caption: 'All time greats',
      info: "Google search - I'm feeling lucky.",
      CSSClass: 'icon-angular',
      id: 'allnetainfo'
    },
    {
      link: 'https://google.com/',
      caption: 'Contests',
      info: "Google search - I'm feeling lucky.",
      CSSClass: 'icon-google',
      id: 'unnapprovednetainfo'
    },
  ];

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


  constructor(private store: Store<State>, private _sidenavService: SidenavService, private router: Router) {
    this._sidenavService.sideNavState$.subscribe((res) => {
      this.onSideNavChange = res;
      if (res == true) { } else if (res == false) { }
    });
  }

  ngOnInit(): void { }

  handleSelectNeta(neta: any) {
    // let netaId: any = neta.id || 'DEFAULT';
    // this.router.navigate([`/admin-dashboard/admin-home/${netaId}`]);
  }

}
