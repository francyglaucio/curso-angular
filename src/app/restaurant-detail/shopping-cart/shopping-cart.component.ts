import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shopingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items():any{
    return this.shopingCartService.items;
  }

  clear(){
    this.shopingCartService.clear()
  }

  removeItem(item:any){
    this.shopingCartService.removeItem(item)
  }

  addItem(item:any){
    this.shopingCartService.addItem(item)
  }

  total():number{
    return this.shopingCartService.total()
  }

}
