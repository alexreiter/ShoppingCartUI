import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PhonesService } from '../../services/phones.service';
import { Phone } from '../../models//phone';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @Input('show-actions') showActions = true;
  phone : Phone;

  constructor(
              private route: ActivatedRoute, 
              private phoneService: PhonesService,
              private cartService : CartService) { }


              addToCart(phone:Phone){
                

              }

   ngOnInit() : void {
 
   this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.phoneService.getPhone(+params.get('id'))
      )
   ).subscribe(phone => this.phone = phone);

  }

}

