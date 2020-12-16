import { Phone } from './phone';


export class CartItem {
  

   constructor(public phone: Phone, public quantity: number ){}

   get totalPrice() { return this.phone.price * this.quantity;}
    
}