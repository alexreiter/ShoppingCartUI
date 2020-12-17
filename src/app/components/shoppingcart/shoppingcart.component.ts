import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cart-item';
import { Phone } from 'src/app/models/phone';
import { CartService } from '../../services/cart.service';
import { PhonesService } from '../../services/phones.service';



@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  carts :any; 
  shoppingcart: Observable<CartItem[]>
total: number;  
  
  

  constructor(private cartService: CartService, private route: ActivatedRoute, private phonesService: PhonesService) { }

  
//Gets the shopping cart items from backend
  _getCart(): void{
    this.cartService.getCartItems().subscribe(carts => {
      console.log("carts = " , carts);
      return carts = carts;
    })
  }


  //Increase items in the shopping cart by button click
 increment_quantity(id,quantity,name,price,img) {
   
  let payload = {
    id: id,
    quantity: quantity,
    name:name,
    price: price,
    img: img

  }
    
   this.cartService.increaseQty(id,payload).subscribe(shoppingcart => this._getCart()); 
    }

    decrement_quantity(id, quantity, name, price, img){
      let payload = {
        id: id,
        quantity: quantity,
        name:name,
        price: price,
        img: img
      }
     
       this.cartService.decreaseQty(id,payload).subscribe(shoppingcart => this._getCart()); 
        }
    

    //Delete items from shopping cart by button click
    deleteItem(id){
      this.cartService.deleteItem(id).subscribe(shoppingcart => this._getCart());
    }

    public SubtotalPrice(){
      let sum = 0;
      for (let id in this.carts)
      sum += this.carts[id].price * this.carts[id].quantity;
      console.log("sum = ", sum)
      return sum;
     }

     public countItem(){
       let sum= 0;
       for(let id in this.carts){
         sum += this.carts[id].quantity + this.carts[id].quantity;
         console.log("sum = ", sum)

         return sum;
       }
     }
  
      

  ngOnInit() {

  
    this._getCart();
    
    
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cartService.getCartItems()
        )
     ).subscribe(carts => this.carts = carts);

    
     
  }

}
