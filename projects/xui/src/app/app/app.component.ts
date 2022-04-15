import { Store } from '@ngrx/store';
import { AppState } from './../core/core.state';
import { Component } from '@angular/core';

import { routeAnimations } from './../core/core.module';
import { AppService } from '../services/app.service';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserService } from '../services/user.service';
import { actionInitialiseSettings } from '../core/settings/settings.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {

  constructor(
    public appService: AppService,
    private store: Store<AppState>,
    private userService: UserService,
  ) {
    this.appService.initAppService();
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.appService.appSettingsSubject.next(user);
        if (user.uid) {
          this.userService.getUserSettingsTestUid(user.uid).then((res: any) => {
            if (res?.settings) {
              this.store.dispatch(
                actionInitialiseSettings({ payload: res.settings })
              );
            }
          }).catch(err => {

          });
        }
      }
    });
  }

}
