import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerSignupDataService } from 'src/network/dataServices/CustomerSignupDataService';

@Component({
  selector: 'app-personalsign',
  templateUrl: './personalsign.component.html',
  styleUrls: ['./personalsign.component.css']
})
export class PersonalsignComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required ]),
  });
  submitted: boolean=false;
  constructor(private _CustomerSignupDataService:CustomerSignupDataService,
    private router:Router ) { }

  ngOnInit(): void {
  }

  signup():void|boolean{
    this.submitted = true;
    if (this.registerForm.invalid || this.registerForm.value.password != this.registerForm.value.confirmPassword ) {
      return false;
    }
    this._CustomerSignupDataService.prepareRequestWithParameters(this.registerForm.value.email,this.registerForm.value.password)
    this._CustomerSignupDataService.queryTheServer({
      email:this.registerForm.value.email,
      password:this.registerForm.value.password
    }).subscribe({
      next: resp=> this.router.navigate(['/personalemailcomplete']),
      error: err=>{
        console.log(err)
        alert(err.error.message)
      }
   });
  }

}
