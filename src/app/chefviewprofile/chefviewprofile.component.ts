import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-chefviewprofile',
  templateUrl: './chefviewprofile.component.html',
  styleUrls: ['./chefviewprofile.component.css'],
})
export class ChefviewprofileComponent implements OnInit {
  // firstName: string = '';
  // lastName: string = '';
  // address: string = '';
  // cookExp: string = '';
  // membSince = new Date();
  // phone: string = '';
  // emailid: string = '';
  // selected: string = 'cash';
  data: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((res) => {
        // console.log(res);
        this.data = res;
        // this.firstName = res['firstname'];
        // this.lastName = res['lastnmae'];
        // this.address = res['address'];
        // this.cookExp = res['cook_exp'];
        // this.membSince = res['memb_since'];
        // this.phone = res['phone'];
        // this.emailid = res['emailid'];
        // this.selected = res['payment'];
      });
  }

  ngOnInit(): void {
  }
}




