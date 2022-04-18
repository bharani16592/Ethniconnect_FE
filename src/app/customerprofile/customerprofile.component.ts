import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

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
