import { ROUTE_ANIMATIONS_ELEMENTS } from './../../../../core/animations/route.animations';
import { map, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { UserService } from '~/app/services/user.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-settings-content',
  templateUrl: './settings-content.component.html',
  styleUrls: ['./settings-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContentComponent implements OnInit {

  settings$: Observable<any> | undefined = this.userservice.getSettings();
  dataLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  sideNavItems: any = ['general'];
  generalSideNavItems: any = ['general'];
  selectedNavItem: any = 'general';

  constructor(
    private userservice: UserService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.settings$.subscribe(res => {
      let data = res[0].data;
      let dynamicSideNavItems = Object.keys(data);
      this.sideNavItems = [...this.generalSideNavItems, ...dynamicSideNavItems];
      this.dataLoaded$.next(true);
    });
  }

  selectSideNavItem(item) {
    this.selectedNavItem = item;
  }

}
