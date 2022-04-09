import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, public auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.auth.afAuth.authState.pipe(
      take(1),
      map((isAuth) => !isAuth),
      map((auth) => {
        if (!auth) {
          this.router.navigate(['/home']);
        }
        return auth;
      })
    );
  }
}
