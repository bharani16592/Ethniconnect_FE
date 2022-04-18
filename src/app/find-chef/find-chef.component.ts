import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchChefsForCuisinesAndZipCodeDataService } from 'src/network/dataServices/FetchChefsForCuisinesAndZipCodeDataService';

@Component({
  selector: 'app-find-chef',
  templateUrl: './find-chef.component.html',
  styleUrls: ['./find-chef.component.css']
})
export class FindChefComponent implements OnInit {
  zipCode:number=0
  cuisineId:number=0
  selectedcuisineCategory:string=""
  chefs: Array<any> = [];
 

  constructor(private _FetchChefsForCuisinesAndZipCodeDataService:FetchChefsForCuisinesAndZipCodeDataService,
    private _Activatedroute:ActivatedRoute,
    public location: Location) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
      this.zipCode = Number(params.get('zipCode')) ;
      this.cuisineId = Number(params.get('cuisineId')) ;
      this.selectedcuisineCategory = String(params.get("selectedcuisineCategory"));
    });
   
    if(this.zipCode && this.cuisineId){
      this.fetchChefsForCuisinesAndZipCode()
    }
  }

  fetchChefsForCuisinesAndZipCode(){
    this._FetchChefsForCuisinesAndZipCodeDataService.prepareRequestWithParameters(this.zipCode,this.cuisineId)
    this._FetchChefsForCuisinesAndZipCodeDataService.queryTheServer().subscribe({
      next:res=>{
        const data:any=res
        if(data.length>0){
          this.chefs=data
        }else{
          alert("Sorry we are yet to serve this area!")
        }
        
      },
      error:err=>console.log(err)
  })
  }

  navigatePreviousPage() {
    this.location.back()
  }

}
