import { CarItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-intem.model";

export class ShoppingCartService{
    items: CarItem[] = []

    clear(){
        this.items = []
    }

    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem)=>mItem.menuItem.id==item.id)
        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.items.push(new CarItem(item))
        }

    }

    removeItem(item:CarItem){
        this.items.slice(this.items.indexOf(item),1)
    }

    total(): number{
        return this.items.map(item => item.value()).reduce((prev, value)=>prev+value,0)
    }


}