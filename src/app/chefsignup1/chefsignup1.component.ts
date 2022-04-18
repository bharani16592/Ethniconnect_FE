

import { Component, OnInit } from '@angular/core';
import { ChefSignupDataService } from 'src/network/dataServices/ChefSignupDataService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chefsignup1',
  templateUrl: './chefsignup1.component.html',
  styleUrls: ['./chefsignup1.component.css']
})
export class Chefsignup1Component implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required ]),
  });
  submitted: boolean=false;
  
  constructor(private _ChefSignupDataService:ChefSignupDataService,
    private router:Router ) { }

  ngOnInit(): void {
  }

  signup():void|boolean{
    this.submitted = true;
    if (this.registerForm.invalid || this.registerForm.value.password != this.registerForm.value.confirmPassword ) {
      return false;
    }
    this._ChefSignupDataService.prepareRequestWithParameters(this.registerForm.value.email,this.registerForm.value.password)
    this._ChefSignupDataService.queryTheServer({
      email:this.registerForm.value.email,
      password:this.registerForm.value.password
    }).subscribe({
      next: resp=> this.router.navigate(['/chefemailcomplete']),
      error: err=>{
        console.log(err)
        alert(err.error.message)
      }
   });
  }

}
