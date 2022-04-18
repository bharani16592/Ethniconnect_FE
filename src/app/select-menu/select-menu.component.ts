import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/network/dataServices/cart.service';
import { FetchMenuByChefIdDataService } from 'src/network/dataServices/FetchMenuByChefIdDataService';
import { GetChefByIdDataService } from 'src/network/dataServices/GetChefByIdDataService';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.css']
})
export class SelectMenuComponent implements OnInit {
  openModal()
  {
    var modal = document.getElementById("myModal") as HTMLElement;

    //need to get values from database
    
    modal.style.display = "block";
  }

  closeModal()
  {
    var modal = document.getElementById("myModal") as HTMLElement;

    modal.style.display = "none";
  }
  

  daysInAWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  activeDay="Wednesday"
  chefId:number=0
  selectedcuisineCategory:string=""
  isMenuEmpty = false
  selectedMenu:any=[]
  chef: any;
  chefMenuList=[
    {
      "menuid":1,
      menucategory:"Dinner",
      menu_item_image:"",
      item_name:"soup",
      menu_item_price:100,
      item_ingredients:"ingredientsssss ",
      item_interesting_facts:"fdsf   dfsf  fsdfsd",
      week:"Wednesday",
      cuisineCategory:"Italian"
    },
    {
      "menuid":2,
      menucategory:"Dinner",
      menu_item_image:"data:image/png;base64,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",
      item_name:"soup2",
      menu_item_price:100,
      item_ingredients:"ingredientsssss ",
      item_interesting_facts:"fdsf   dfsf  fsdfsd",
      week:"Wednesday",
      cuisineCategory:"Italian"
    },
    {
      "menuid":3,
      menucategory:"Dinner",
      menu_item_image:"",
      item_name:"soup3",
      menu_item_price:100,
      item_ingredients:"ingredientsssss ",
      item_interesting_facts:"fdsf   dfsf  fsdfsd",
      week:"Wednesday",
      cuisineCategory:"Italian"
    },
    {
      "menuid":4,
      menucategory:"Lunch",
      menu_item_image:"",
      item_name:"soup",
      menu_item_price:100,
      item_ingredients:"ingredientsssss ",
      item_interesting_facts:"fdsf   dfsf  fsdfsd",
      week:"Wednesday",
      cuisineCategory:"Italian"
    },
    {
      "menuid":5,
      menucategory:"Breakfast",
      menu_item_image:"",
      item_name:"soup",
      menu_item_price:100,
      item_ingredients:"ingredientsssss ",
      item_interesting_facts:"fdsf   dfsf  fsdfsd",
      week:"Wednesday",
      cuisineCategory:"Italian"
    },
  ]

  Breakfast:any=[]
  Lunch:any=[]
  Dinner:any=[]

  orders: Array<any> = [];
  clickedMenu : any;
  @ViewChild('content', { read: TemplateRef }) content :TemplateRef<any> | undefined;

  constructor(private _FetchMenuByChefIdDataService:FetchMenuByChefIdDataService,
    private _Activatedroute:ActivatedRoute, public cartService: CartService, 
    public router: Router, 
    public chefService: GetChefByIdDataService,
    public location: Location,
    private modalService: NgbModal) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.chefId = Number(params.get('chefId')) ;
      this.selectedcuisineCategory = String(params.get('selectedcuisineCategory')) ;
      this.chefService.prepareRequestWithParameters([this.chefId])
      this.chefService.queryTheServer().subscribe(data => this.chef = data)
      this._FetchMenuByChefIdDataService.prepareRequestWithParameters(this.chefId)
      this._FetchMenuByChefIdDataService.queryTheServer().subscribe({
        next:res=>{
            const data:any=res;

            this.chefMenuList=data.chefMenuList
            this.chefMenuList=this.chefMenuList.filter(menu=>menu.cuisineCategory==this.selectedcuisineCategory)
            this.Breakfast=this.chefMenuList.filter(menu=>menu.week==this.activeDay && menu.menucategory=='Breakfast')
            this.Lunch=this.chefMenuList.filter(menu=>menu.week==this.activeDay && menu.menucategory=='Lunch')
            this.Dinner=this.chefMenuList.filter(menu=>menu.week==this.activeDay && menu.menucategory=='Dinner')
          console.log(this.chefMenuList);
          console.log(this.Breakfast);
          console.log(this.Lunch);
          console.log(this.Dinner);
          localStorage.setItem('data1',data.chefMenuList)
          localStorage.setItem('chefId', this.chefId.toString())
          console.log(localStorage.getItem("data1"))
          this.loadFromCart()
        },
        error:err=>console.log(err)
      })

    });
  }


  updateActiveDay(column:string){
    this.activeDay= column
    const weekMenuList = this.chefMenuList.filter(menu=>menu.week.toLowerCase()===this.activeDay.toLowerCase())
    this.Breakfast=weekMenuList.filter(menu=> menu.menucategory.toLowerCase()=='Breakfast'.toLowerCase())
    this.Lunch=weekMenuList.filter(menu=> menu.menucategory.toLowerCase()=='Lunch'.toLowerCase())
    this.Dinner=weekMenuList.filter(menu=> menu.menucategory.toLowerCase()=='Dinner'.toLowerCase())
    this.isMenuEmpty = weekMenuList.length===0 ? true : false
  }
  
  onMenuAddition(event:any,menuID:number){
    if(event.target.value){
      const reqData:any={menuid:menuID,count:event.target.value}
      if(this.selectedMenu.map((menu: { menuid: number; }) =>menu.menuid).includes(menuID)){
        this.selectedMenu=this.selectedMenu.filter((menu: { menuid: number; })=>menu.menuid!=menuID)
        this.selectedMenu.push(reqData)
      }else{
        this.selectedMenu.push(reqData)
      }
    }
    console.log(this.selectedMenu)

  }
  getQuantity(id: number) {
    return this.orders.find( item => item.menuid === id)?.quantity ?? 0
  }

  reduceQuantity(menu: any) {
    this.orders = this.orders.map(item => {
      if( item.menuid === menu.menuid && item.quantity){
        item.quantity -= 1
        return item
      }
      return item
    })
  }

  increaseQuantity(menu: any) {
    const selectedItem = this.orders.find((item:any) => {
      return menu.menuid === item.menuid;
    }) ?? null
    if (selectedItem === null) {
      console.log('null');
      this.orders.push({ menuid: menu.menuid, quantity: 1 })
    } else {
      this.orders = this.orders.map((item:any) => {
        if (item.menuid === menu.menuid) {
          item.quantity += 1
        }
        return item
      })

    }
  }

  goToOrderSummary() {
    const orders = this.orders.map( item => {
      const menu = this.chefMenuList.find( chefMenu => chefMenu.menuid === item.menuid)
      return { menu, quantity: item.quantity}
    })
    this.cartService.setCart(orders)
    this.router.navigate(['/OrderSummary'])
  }

  loadFromCart() {
    this.orders = this.cartService.cart.map(item => {
      return { menuid: item.menu.menuid, quantity: item.quantity}
    })
  }

  navigatePreviousPage() {
    this.location.back()
  }

  showMenuModal(menu: any) {
    this.clickedMenu = menu
    this.modalService.open(this.content, { centered: true });
  }


 }
 

