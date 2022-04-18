import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ethni-Connect';
  constructor(private _Router:Router) {
  }
  
  logOut(){
    localStorage.clear()
    this._Router.navigate(['/'])
  }
  loggedIn() {
    return localStorage.getItem('loginId');
 }
 isChef() {
  return localStorage.getItem('isChef')=="true";

}


}
