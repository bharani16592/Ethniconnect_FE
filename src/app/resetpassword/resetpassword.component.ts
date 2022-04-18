import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ResetPasswordDataService } from 'src/network/dataServices/ResetPasswordDataServices';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetPasswordForm = new FormGroup({
   // email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required ]),
  });
  submitted: boolean=false;
  userId: any;
  constructor(private _ResetPasswordDataService: ResetPasswordDataService,
    private router: Router,private activatedRoute: ActivatedRoute ) { 
      
    }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['email'];
      console.log(this.userId);
    });
  }

  resetPassword():void|boolean{
    
    this.submitted = true;
    // if (this.resetPasswordForm.invalid || this.resetPasswordForm.value.password != this.resetPasswordForm.value.confirmPassword ) {
    //   return false;
    // }
   
    //this._ResetPasswordDataService.prepareRequestWithParameters(this.resetPasswordForm.value.password)
    this._ResetPasswordDataService.queryTheServer({
      emailId: this.userId,
      newPwd:this.resetPasswordForm.value.password
    }).subscribe(
      
      {
       
      next: resp=> this.router.navigate(['/Login']),
      error: err=>{
        console.log(err)
        //alert(err.error.message)
      }
   });
   alert('Your password has been updated successfully')
  }

}