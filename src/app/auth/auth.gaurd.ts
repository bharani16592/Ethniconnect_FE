import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.loggedIn();
        if (!isAuthenticated) {
            this.router.navigate(['/Login']);
        }
        return isAuthenticated?true:false;
    }

    loggedIn() {
        return localStorage.getItem('loginId');
     }
}