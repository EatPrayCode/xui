import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { AuthService } from '../core/auth/auth.service';
import { AuthGuard } from '../core/auth/guards/auth.guard';
import { ChooseAppSettingsModalComponent } from '../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private authService: AuthService,
    public authGuard: AuthGuard,
    private dialog: MatDialog
  ) {}

  logout() {
    // this.authService.logout();
  }

  login() {
    this.authGuard.prompt().then((res) => {});
  }

  openAppSettingsModal(): Promise<any> {
    return this.dialog
      .open<ChooseAppSettingsModalComponent, {}, {}>(
        ChooseAppSettingsModalComponent,
        {
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
        }
      )
      .afterClosed()
      .toPromise();
  }
}
