import { map, switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MarketingGuardService implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    return this.afAuth.authState.pipe(
      take(1),
      switchMap(async (authState) => {
        if (authState) {
          // check are user is logged in
          const token = await authState.getIdTokenResult();
          console.log(token);
          if (!token.claims.marketing) {
            // check claims
            alert('Not allowed');
            this.router.navigate(['/not-allowed']);
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      })
    );
  }
}
