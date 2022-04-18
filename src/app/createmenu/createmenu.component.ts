import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddChefMenuDataService } from 'src/network/dataServices/AddChefMenuDataService';

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.css']
})
export class CreatemenuComponent implements OnInit {
  imageURL=''
  daysInAWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  numberOfMeals=["First","Second","Third"]
  activeDay="Tuesday"
  activeCuisineId:number | any =1
  cuisines=[     {
    "id": 1,
    "cuisine_name": "Italian",
    "cuisine_image": "",
    "menus": []
},
{
  "id": 2,
  "cuisine_name": "Thai",
  "cuisine_image": "",
  "menus": []
},
{
  "id": 3,
  "cuisine_name": "Indian",
  "cuisine_image": "",
  "menus": []
},
{
  "id": 4,
  "cuisine_name": "Mexican",
  "cuisine_image": "",
  "menus": []
},
{
  "id": 5,
  "cuisine_name": "Middle Eastern",
  "cuisine_image": "",
  "menus": []
},
{
  "id": 6,
  "cuisine_name": "Chinese",
  "cuisine_image": "",
  "menus": []
}]
  myformGroup = new FormGroup({
    breakfast: new FormArray(
      this.numberOfMeals.map(num=>{
        return new FormGroup({
            item_name: new FormControl('',[Validators .required]),
            menu_item_price: new FormControl('',[Validators.required]),
            item_ingredients:new FormControl('',[Validators.required ]),
            item_intresting_facts:new FormControl('',[Validators.required ]),
            menu_item_image:new FormControl('',[Validators.required]),
          //  week:new FormControl(this.activeDay,[Validators.required ]),
          });
        })
    ),
    lunch: new FormArray(
      this.numberOfMeals.map(num=>{
        return new FormGroup({
            item_name: new FormControl('',[Validators .required]),
            menu_item_price: new FormControl('',[Validators.required]),
            item_ingredients:new FormControl('',[Validators.required ]),
            item_intresting_facts:new FormControl('',[Validators.required ]),
            menu_item_image:new FormControl('',[Validators.required]),
           // week:new FormControl(this.activeDay,[Validators.required ]),
          });
        })
    ),
    dinner: new FormArray(
      this.numberOfMeals.map(num=>{
        return new FormGroup({
            item_name: new FormControl('',[Validators .required]),
            menu_item_price: new FormControl('',[Validators.required]),
            item_ingredients:new FormControl('',[Validators.required ]),
            item_intresting_facts:new FormControl('',[Validators.required ]),
            menu_item_image:new FormControl('',[Validators.required]),
            //week:new FormControl(this.activeDay,[Validators.required ]),
          });
        })
    )
  });
  constructor(private _AddChefMenuDataService:AddChefMenuDataService,
    private router:Router) { }

  ngOnInit(): void {
  
  }

  get breakfast() {
    return this.myformGroup.controls["breakfast"] as FormArray;
  }

  get lunch() {
    return this.myformGroup.controls["lunch"] as FormArray;
  }

  get dinner() {
    return this.myformGroup.controls["dinner"] as FormArray;
  }


  addMenu(){

  let validFormData=[]
  for (let formArr in this.myformGroup.controls) {
    let abc:any =this.myformGroup.controls[formArr] 
    for (let form of abc.controls){
      if(!form.invalid){
        validFormData.push({...form.value,
          menucategories:formArr}) 
         
         
      }
      
    }
    
  }
  alert('your menu has been added successfully')
  
  console.log(validFormData)
  if(validFormData.length>0){
    this._AddChefMenuDataService.queryTheServer({
      login_id: Number(localStorage.getItem('loginId')) ,
      cuisine_id:this.activeCuisineId,
      menu:validFormData,
      week:this.activeDay}).subscribe(
        {next:res=>{
          this.router.navigate(['/chefviewprofile'])
        },
        error:err=>console.log(err)}
      )
  }
    
  }


  updateActiveDay(column:string){
    this.activeDay=column
  }

  cuisineUpdate(){
    this.myformGroup.reset()
  }

  showPreview(event:any,meal:string,index:number){
    if(event && event.target && event.target.files){
      const file = event.target.files[0];
      const reader = new FileReader();      
      reader.onload = () => {
        this.imageURL = reader.result as string;
        console.log(reader.result);
        (this.myformGroup.controls[meal] as FormArray).controls[index].patchValue({
          menu_item_image: reader.result as string
        });
      }
      reader.readAsDataURL(file);

    }

  }


}