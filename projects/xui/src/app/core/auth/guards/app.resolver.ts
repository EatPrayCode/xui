import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map, switchMap, take, tap } from 'rxjs/operators';
import { StateService } from '../../../services/state.service';
import { ChooseAppSettingsModalComponent } from '../components/choose-app-settings-modal/choose-app-settings-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AppResolver implements Resolve<any> {
  constructor(public stateService: StateService, private dialog: MatDialog) {}

  public promptAppSettings(): Observable<any> {
    const modalSettings: any = {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '90%',
      position: {
        right: '0px',
        bottom: '0px'
      },
      data: {
        obj: {}
      }
    };
    return this.dialog
      .open(ChooseAppSettingsModalComponent, modalSettings)
      .afterClosed();
    // return this.dialog.open<ChooseAppSettingsModalComponent, {}, {}>(ChooseAppSettingsModalComponent, modalSettings).afterClosed();
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.stateService.getAppSettings().pipe(
      take(1),
      tap((s) => {}),
      switchMap((appSettings) =>
        !appSettings || !appSettings.country
          ? this.promptAppSettings()
          : of(appSettings)
      )
    );
  }
}
