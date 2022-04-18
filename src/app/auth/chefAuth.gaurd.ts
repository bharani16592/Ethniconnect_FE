import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
  
@Injectable()
export class ChefAuthGuard implements CanActivate {
    constructor(
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.loggedIn();
        var isAChef=this.isChef()
        if (!isAuthenticated) {
            this.router.navigate(['/Login']);
            return false
        }else return isAChef?true:false;
        
    }

    loggedIn() {
        return localStorage.getItem('loginId');
     }

    isChef() {
        return localStorage.getItem('isChef');
     }
}