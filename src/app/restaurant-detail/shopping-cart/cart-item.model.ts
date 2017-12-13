import { MenuItem } from "app/restaurant-detail/menu-item/menu-intem.model";

export class CarItem{
    constructor(public menuItem: MenuItem,
        public quantity: number = 1){}

    value():number{
        return this.menuItem.price * this.quantity
    }
} 