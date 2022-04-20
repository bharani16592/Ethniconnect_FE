import { Component, OnInit } from '@angular/core';
import { SignInDataService } from 'src/network/dataServices/SigninDataService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });
  submitted: boolean=false;

  constructor(private _SignInDataService:SignInDataService,
    private router:Router ) { }

  ngOnInit(): void {
  }

  login(){
    this._SignInDataService.queryTheServer({
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }).subscribe({
      
      next: resp=>{
        const data:any=resp
        localStorage.setItem('loginId',data.loginId)
        localStorage.setItem('isChef',data.chef)
        if (this._SignInDataService.redirectUrl){
          this.router.navigate([this._SignInDataService.redirectUrl])
          return
        }
        if(data.chef)
        {
          console.log(data.chef)
          if(!data.chefProfile){
          console.log(data.chef)
          console.log(data.chefProfile)
          this.router.navigate(['/chefprofilesetup'])
          return
        }
        console.log(data.chef)
        console.log(data.chefProfile)
        this.router.navigate(['/createmenu'])
      }
        else{
          this.router.navigate(['/EnterZipCode'])
        }
        
      } ,
      error: err=>{
        console.log(err)
        alert('Please enter the correct details')
        //alert(err.error.errormessage)
      }
   });
  }

}
