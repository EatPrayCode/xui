import { getAuth } from 'firebase/auth';
import { AppService } from './../../../../services/app.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '~/app/services/user.service';

@Component({
  selector: 'app-settings-netas',
  templateUrl: './settings-netas.component.html',
  styleUrls: ['./settings-netas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsNetasComponent implements OnInit {

  selectedNetas: any = {};
  allNetas$: Observable<any> = of([]);
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  loading: any = true;
  dataLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  sideNavItems: any = ['general'];

  constructor(
    public userService: UserService,
    public appService: AppService
  ) { }

  ngOnInit(): void {
    this.allNetas$ = this.userService.getAllNetas();
    this.allNetas$.subscribe(res=>{
      this.dataLoaded$.next(true);
    });
  }

  onSelectCard(card) {
    this.selectedNetas[card.username] = this.selectedNetas[card.username] ? !this.selectedNetas[card.username] : true;
  }

  saveNetaPreferences() {
    const selectedNetasKeys: any[] = Object.keys(this.selectedNetas);
    const finalSelectedNetas = selectedNetasKeys.filter(key => {
      return this.selectedNetas[key];
    });
    this.userService.setNetaPreferences(finalSelectedNetas).then(res => {
    },
      err => { });
  }
}
