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

  loading: any = false;
  leftSideNav$: BehaviorSubject<any> | undefined = new BehaviorSubject([]);
  rightSideNav$: BehaviorSubject<any> | undefined = new BehaviorSubject([]);
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  obj = {};
  selectedOption: any = {};

  selectedNetas: any = {};
  allNetas$: Observable<any> = of([]);
  
  constructor(
    private userservice: UserService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.userservice.getSettings().pipe(
      map(res => {
        return res[0].data;
      })
    ).subscribe(res => {
      const sideNavItems = Object.keys(res);
      this.obj = res;
      this.leftSideNav$.next(sideNavItems);
      this.rightSideNav$.next(res);

      console.log(sideNavItems);
    });
    this.allNetas$ = this.userService.getAllNetas().pipe(tap(res => {
      this.loading = false;
    }));
  }

  selectSideNavItem(item) {
    this.selectedOption = this.obj[item];
  }

  onSelectCard(card) {
    this.selectedNetas[card.username] = this.selectedNetas[card.username] ? !this.selectedNetas[card.username] : true;
  }

}
