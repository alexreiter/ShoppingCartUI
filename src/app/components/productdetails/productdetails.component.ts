import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PhonesService } from '../../services/phones.service';
import { Phone } from '../../models//phone';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @Input('show-actions') showActions = true;
  phone : Phone;
  plan$ : any = [];



  constructor(
              private route: ActivatedRoute, 
              private phonesService: PhonesService, 
              private cartService: CartService){}
              
           //Add item to the shopping cart
              addItemToCart( id, quantity, price, name, img) : void {
                let payload = {
                  id: id,
                  quantity: quantity,
                  price: price, 
                  name: name,
                  img: img
                };
                this.cartService.addToCart(payload).subscribe(() => {
                  this.phonesService.getPhone(id);
                  alert('Product Added');
                });
              }
              

   ngOnInit() : void {
 
   this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.phonesService.getPhone(+params.get('id'))
      )
   ).subscribe(phone => this.phone = phone);




  }

}

