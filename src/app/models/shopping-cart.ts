import { CartItem } from './cart-item';

export class ShoppingCart{

    items: CartItem [] = [];

    constructor(public itemsMap: {[id: string] : CartItem }){
        for(let id in itemsMap){

            let item = itemsMap[id];
            this.items.push(new CartItem(item.phone, item.quantity));        }
    }

    

    get totalItemsCount(){
        let count = 0;
        for (let id in this.itemsMap)
        count += this.itemsMap[id].quantity;
        return count;
    }
}