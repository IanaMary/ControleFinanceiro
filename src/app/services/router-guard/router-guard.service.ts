import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate, CanLoad {

  constructor(public router: Router, public authService: AuthService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const validation: boolean = await this.authService.isAuthenticated();
    if (validation) {
      return validation;
    } else {
      return this.router.createUrlTree(['/autenticacao']);
    }
  }

  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    const validation: boolean = await this.authService.isAuthenticated();
    if (validation) {
      return validation;
    } else {
      this.router.navigate(['/autenticacao']);
      return false;
    }
  }

}
