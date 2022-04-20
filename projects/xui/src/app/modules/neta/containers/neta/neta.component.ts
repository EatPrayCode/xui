import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-neta',
  templateUrl: './neta.component.html',
  styleUrls: ['./neta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetaComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
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
  currentRoute: any = '';
  data$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  handleClickTabItem(event: any) {
    let link: any = event.link || 'home';
    let currentUrl: any = `/defaultId/${link}`;
    this.router.navigate([currentUrl]);
  }

  constructor(
    private router: Router,
    private userservice: UserService) {
  }

  ngOnInit(): void {
    this.currentRoute = this.router.routerState.snapshot.url;
    this.userservice.GetDataByUserName(this.currentRoute).then((res: any) => {
      console.log(res);
      this.data$.next(res);
    },
      err => {
        this.router.navigate(['notfound']);
        console.log("Neta Not found");
      });
  }

}
