import { Phone } from './phone';
import {PlanDetails} from './plandetails';


export class CartItem {
  

   constructor(public phone: Phone, public quantity: number, public price: number){}

   get totalPrice() { return (this.phone.price * this.quantity) + this.price;}
    
}