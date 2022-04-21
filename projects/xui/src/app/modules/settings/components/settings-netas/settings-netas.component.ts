import { getAuth } from 'firebase/auth';
import { AppService } from './../../../../services/app.service';
import { tap } from 'rxjs/operators';
import { UserService } from 'projects/xui/src/app/services/user.service';
import { Observable, of } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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

  constructor(
    public userService: UserService,
    public appService: AppService
  ) { }

  ngOnInit(): void {
    this.allNetas$ = this.userService.getAllNetas().pipe(tap(res => { }));
    const auth = getAuth();
    const user = auth.currentUser; // null if
    if (user) {
      const uid: any = user.uid;
      this.userService.getNetaInfoSettings(uid).then((res: any) => {
        const arr = res.netapreferences;
        arr.forEach(element => {
          this.selectedNetas[element] = true;
        });
      },
        err => {

        });
    }
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
      err => {
      });
  }
}
