import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";
  
@Injectable()
export class ResetPwdAuthGaurd implements CanActivate {
    constructor(
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var forgotpassword = this.forgotPwd();
        if (forgotpassword==null) {
            this.router.navigate(['/forgotpassword']);
        }
        return forgotpassword?true:false;
    }

    forgotPwd() {
        return localStorage.getItem('emailId');

     }
}