import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class  NavbarComponent implements OnInit{

carts: any;
cartItemCount = 0;

  constructor(private cartService: CartService, private route: ActivatedRoute) { }

  collapsed=true;

  _getCart(): void{
    this.cartService.getCartItems().subscribe(carts => {
      console.log("carts = " , carts);
      return carts = carts;
    })
  }
  
   ngOnInit(): void {
    this._getCart();
    
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cartService.getCartItems()
        )
     ).subscribe(carts => this.carts = carts);


     /*
     let cart$ = await this.cartService.getCartItems();
     cart$.subscribe(carts => {
       this.cartItemCount = 0;
       for (let id in this.carts.items){
         this.cartItemCount += this.carts.items[id].quantity;
       }
     });
     */

  }

 

}
