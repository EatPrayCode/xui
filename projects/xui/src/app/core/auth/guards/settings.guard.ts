import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { switchMap, take, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import { ChooseAppSettingsModalComponent } from '../components/choose-app-settings-modal/choose-app-settings-modal.component';
import { StateService } from '../../../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsGuard implements CanActivate {
  constructor(private dialog: MatDialog, public stateService: StateService) {}

  public promptAppSettings(): Promise<any> {
    return this.dialog
      .open<ChooseAppSettingsModalComponent, {}, {}>(
        ChooseAppSettingsModalComponent,
        {}
      )
      .afterClosed()
      .toPromise();
  }

  public checkForAppSettings(): Promise<any> {
    return this.stateService.appSettingsSubject
      .pipe(
        take(1),
        tap((s) => {}),
        switchMap((appSettings) =>
          !appSettings || !appSettings.country
            ? this.promptAppSettings()
            : of(appSettings)
        )
      )
      .toPromise();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkForAppSettings()
      .then((appSettings) => !!appSettings.country)
      .finally(() => {
        this.stateService.appSettingsSubject.subscribe((res) => {});
      });
  }
}
