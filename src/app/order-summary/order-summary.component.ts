import { Location } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/network/dataServices/cart.service';
import { GetChefByIdDataService } from 'src/network/dataServices/GetChefByIdDataService';
import { OrderService } from 'src/network/dataServices/order.service';
import { SignInDataService } from 'src/network/dataServices/SigninDataService';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  totalValue = 0;
  cart = this.cartService.cart;
  chef: any;
  constructor(public cartService: CartService,
    public orderService: OrderService,
    public signService: SignInDataService,
    public router: Router,
    public location: Location,
    public chefService: GetChefByIdDataService) { }

  ngOnInit(): void {
    console.log('init');
    const chefId = Number(localStorage.getItem('chefId')) ;
      this.chefService.prepareRequestWithParameters([chefId])
      this.chefService.queryTheServer().subscribe(data => this.chef = data)
    
    // this.cartService.menu.forEach(menu => this.cartService.addMenuToCart(menu))
  }
  increaseQuantity(menu: any) {
    console.log({ menu })
    this.cartService.addMenuToCart(menu)
  }
  reduceQuantity(menu: any) {
    console.log({ menu })
    this.cartService.removeMenuFromCart(menu)
  }

  getOrderValue(){
    let amount = 0;
    let orders = this.cartService.cart
    orders.forEach(item => {
      amount += item.menu.menu_item_price * item.quantity
    })
    const tax = (amount/100 * 6)
    this.totalValue = amount + tax
    return amount + tax;
  }

  getTaxValue() {
    let amount = 0;
    let orders = this.cartService.cart
    orders.forEach(item => {
      amount += item.menu.menu_item_price * item.quantity
    })
    return (amount/100 * 6);
  }

  placeOrder() {
    const customerId = localStorage.getItem('loginId')
    if(!customerId) {
      this.signService.redirectUrl = this.router.url
      console.log(this.signService.redirectUrl)
      this.router.navigate(['/Login'])
      return
    }
    const orders = this.cartService.cart
    const orderData = {
      customerLoginid: customerId,
      totalprice: this.getOrderValue(),
      orderItems: orders.map(item => {return {menu_id: item.menu.menuid, quantity:item.quantity}})
    }
    this.orderService.postOrder(orderData).subscribe(orderInfo => {
      this.router.navigate(['/OrderHistory'])
      
    })
  }

  navigatePreviousPage() {
    this.location.back()
  }
}
