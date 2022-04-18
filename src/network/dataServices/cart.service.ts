import { Injectable } from '@angular/core';

interface ICartItem {
  menu: any;
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<ICartItem> = []
  menu = [{
    menuid: 1,
    "menucategories": "Lunch",
    "menu_item_image": "assets/Images/temporaryFoodImage.png",
    "item_name": "soup",
    "menu_item_price": 5.0,
    "item_ingredients": "bjfhifhdknvk",
    "item_intresting_facts": "afusgfkskf"
  },
  {
    menuid: 2,
    "menucategories": "Breakfast",
    "menu_item_image": "assets/Images/temporaryFoodImage.png",
    "item_name": "pizaa",
    "menu_item_price": 5.0,
    "item_ingredients": "bjfhifhdknvk",
    "item_intresting_facts": "afusgfkskf"
  }]

  constructor() { }

  addMenuToCart(menu: any) {
    const cartItem = this.cart.find(cartItem => {
      return cartItem.menu.menuid === menu.menuid
    }) ?? null
    console.log({ cartItem, menu });
    
    if (cartItem === null) {
      console.log('null');
      this.cart.push({ menu, quantity: 1 })
    } else {
      this.cart = this.cart.map(cartItem => {
        if (cartItem.menu.menuid === menu.menuid) {
          cartItem.quantity += 1
        }
        console.log(this.cart, cartItem);
        return cartItem
      })

    }
  }

  removeMenuFromCart(menu: any) {
    const cartItems = this.cart
    this.cart = cartItems.reduce((acc: any,cartItem) => {
      if( cartItem.menu.menuid === menu.menuid ){
        cartItem.quantity -= 1
        return cartItem.quantity ? [...acc, cartItem] : acc
      }
      return [...acc, cartItem]
    }, [])
    console.log({ cartItems });
    
  }

  setCart(selectedMenus: Array<{menu:any, quantity: number}>) {
    this.cart = selectedMenus.filter( item => item.quantity !==0)
  }
}
