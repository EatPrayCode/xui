import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

@Component({
  selector: 'app-neta',
  templateUrl: './neta.component.html',
  styleUrls: ['./neta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetaComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  selectedType: any;

  tabsList = [
    {
      name: 'Home',
      link: '/home',
      label: 'app.menu.neta-basic-info',
      id: 'basic-info'
    },
    {
      name: 'Videos',
      link: '/videos',
      label: 'app.menu.neta-video-content',
      id: 'video-content'
    },
    {
      name: 'News',
      link: '/news',
      label: 'app.menu.neta-in-the-news',
      id: 'the-news'
    },
    { name: 'Other', link: '/other', label: 'app.menu.neta-other', id: 'other' }
  ];

  labelName: any = '';
  currentRoute: any = this.tabsList[0];

  handleClickTabItem(event: any) {
    let link: any = event.link || 'home';
    let currentUrl: any = `/defaultId/${link}`;
    this.router.navigate([currentUrl]);
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url.split('?')[0];
      });
  }

  ngOnInit(): void {
    this.isAuthenticated$ = of(true);
  }
}
