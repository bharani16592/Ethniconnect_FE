import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordDataService } from 'src/network/dataServices/ForgotPasswordDataService';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPasswordForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
  });
  submitted: boolean=false;
  constructor(private _ForgotPasswordDataService:ForgotPasswordDataService,
    private router:Router) { }

  ngOnInit(): void {
  }

  forgotPassword():void|boolean{
    
    this.submitted = true;
    if (this.forgotPasswordForm.invalid || this.forgotPasswordForm.value.password != this.forgotPasswordForm.value.confirmPassword ) {
      return false;
    }
    this._ForgotPasswordDataService.queryTheServer({
      emailId:this.forgotPasswordForm.value.email,
    }).subscribe({
      
      
      next: resp=> 
      {
       /*  const data:any=resp
        localStorage.setItem('emaiId',data.emailId); */
        this.router.navigate(['/resetpwdemailcomplete'])
    },
      error: err=>{
        console.log(err)
        alert(err.error.message)
      }
   });
  }

}


   
   
   
   
   
   
   
   
   
  