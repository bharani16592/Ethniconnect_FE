import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactStatus: boolean = true;
  emailError: boolean = false;
  msgError: boolean = false;
  nameError: boolean = false;
  name: string = '';
  emailid: string = '';
  message: string = '';
  contactUrl: string = 'http://ethniconnectbackendaws-env.eba-fa8ytper.us-east-2.elasticbeanstalk.com/ContactRequest';
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
 
  public onSubmit() {

    console.log(this.emailid);
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (this.name == ''){this.nameError = true;}else {this.nameError=false}
    if (this.message == ''){this.msgError = true;}else {this.msgError=false}
    if(!new RegExp(regex).test(this.emailid)){
      this.emailError = true;
    }else {this.emailError=false}
    if (this.emailError==false && this.msgError ==false && this.nameError==false) {
      this.emailError = false;
      this.msgError = false;
      this.nameError = false;
      console.log("name: ",this.name);
      console.log("emailid: ",this.emailid);
      console.log("message: ",this.message);
      this.http.post<any>(this.contactUrl, {"name":this.name,"emailid":this.emailid,"message":this.message}).subscribe(data => {
        if(data){
          this.router.navigate(['/Contact'],{queryParams: { status: '1' }});
          this.contactStatus = false;
        }
        else{
          this.router.navigate(['/FormSubmitted'])
          this.name = '';
          this.emailid = '';
          this.message = '';
        }
      })
    }

  }

  public reset(){
    this.name = '';
    this.emailid = '';
    this.message = '';
    this.contactStatus = true;
  }


}
