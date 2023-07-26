import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../Services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private ser: UserAuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.ser.IsUserLogged) {
      return true;
    } else {
      alert('You must frist login...');
      this.router.navigate(['Login']);
      return false;
    }
  }
}

// export const authGuard: CanActivateFn = (route, state) => {
//   return false;
// };
