import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchCuisinesForZipCodeDataService } from 'src/network/dataServices/FetchCuisinesForZipCodeDataService';

@Component({
    selector: 'app-select-cuisine',
    templateUrl: './select-cuisine.component.html',
    styleUrls: ['./select-cuisine.component.css']
})
export class SelectCuisineComponent implements OnInit {
    zipCode:number=0
    selectedCuisine: number | null = null;
    selectedcuisineCategory:string = "";
    cuisines:any=[]
    constructor( private _Activatedroute:ActivatedRoute,
                 private _FetchCuisinesForZipCodeDataService: FetchCuisinesForZipCodeDataService,
                 public router: Router) { }

    ngOnInit(): void {

        this._Activatedroute.paramMap.subscribe(params => {
            console.log(params);
            this.zipCode = Number(params.get('zipCode')) ;
        });

        if(this.zipCode){
            this.fetchCuisinesForZipCode()
        }

    }

    selectCuisine(id: number,cuisineCategory: string) {
        this.selectedCuisine = id
        this.selectedcuisineCategory = cuisineCategory
    }

    fetchCuisinesForZipCode(){
        this._FetchCuisinesForZipCodeDataService.prepareRequestWithParameters(this.zipCode)
        this._FetchCuisinesForZipCodeDataService.queryTheServer().subscribe({
            next:res=>{
                const data:any=res
                if(data.cuisineCategory.length>0){
                    this.cuisines=data.cuisineCategory
                }else{
                    alert("Sorry we are yet to serve this area!")
                }

            },
            error:err=>console.log(err)
        })
    }

    goToNextStep() {
        if (this.selectedCuisine === undefined ||this.selectedCuisine === null ) {
            alert('Please select a cusine to proceed')
            return
        }
        this.router.navigate(['/FindChef',this.zipCode,this.selectedCuisine,this.selectedcuisineCategory])
    }
}
