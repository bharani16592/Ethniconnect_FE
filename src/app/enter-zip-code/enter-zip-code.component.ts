import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchCuisinesForZipCodeDataService } from 'src/network/dataServices/FetchCuisinesForZipCodeDataService';

@Component({
  selector: 'app-enter-zip-code',
  templateUrl: './enter-zip-code.component.html',
  styleUrls: ['./enter-zip-code.component.css']
})
export class EnterZipCodeComponent implements OnInit {

  zipForm = new FormGroup({
    zipCode: new FormControl('',[Validators.required, Validators.maxLength(5),Validators.minLength(5)])
  });

  constructor(private _FetchCuisinesForZipCodeDataService:FetchCuisinesForZipCodeDataService,
    private router:Router) { }

  ngOnInit(): void {
  }

  fetchCuisinesForZipCode():any{

    if(this.zipForm.invalid){
      alert("Enter Valid ZipCode")
      return false
    }
    this._FetchCuisinesForZipCodeDataService.prepareRequestWithParameters(this.zipForm.value.zipCode)
    this._FetchCuisinesForZipCodeDataService.queryTheServer().subscribe({
      next:res=>{
        const data:any=res
        console.log(res)
        if(!data){
          alert("Sorry we are yet to serve this area!")
          return 
        }
        if(data.cuisineCategory.length>0){
          this.router.navigate([`/SelectCuisine/${data.zipCode}`])
        }else{
          alert("Sorry we are yet to serve this area!")
        }  
      },
      error:err=>console.log(err)
    })

  }

}