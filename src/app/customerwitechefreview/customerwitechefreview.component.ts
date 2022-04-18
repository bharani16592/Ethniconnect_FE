import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { map } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-customerwitechefreview',
  templateUrl: './customerwitechefreview.component.html',
  styleUrls: ['./customerwitechefreview.component.css'],
})
export class CustomerwitechefreviewComponent implements OnInit {
  reviewtitle: string = '';
  review: string = '';
  reviewstar: string = '';
  profileUrl: string = 'http://localhost:8080/ReviewSucess';
  data: any;
  options = [
    { value: '5 stars ★★★★★', name: '5stars' },
    { value: '4 stars ★★★★', name: '4stars' },
    { value: '3 stars ★★★', name: '3stars' },
    { value: '2 stars ★★', name: '2stars' },
    { value: '1 stars ★', name: '1stars' },
  ];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit() {
    // const regex =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // if (!new RegExp(regex).test(this.emailid)) {
    //   this.emailError = true;
    // } else {
    //   this.emailError = false;
    // console.log('firstName: ', this.firstName);
    // console.log('emailid: ', this.emailid);
    // console.log('lastName: ', this.lastName);
    let data = {
      reviewtitle: this.reviewtitle,
      review: this.review,
      reviewstar: this.reviewstar,
    };
    this.router.navigate(['ReviewSuccess'], {
      state: data,
    });
    console.log(data);
    // this.router.navigate(['WriteReview'], {
    //   state: data,
    // });
    // this.router.navigate(['ReviewSucess'], {
    //   state: data,
    // });

    this.http.post<any>(this.profileUrl, {
      reviewtitle: this.reviewtitle,
      review: this.review,
      reviewstar: this.reviewstar,
    });
    // }
  }
}