import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CartItem } from 'src/app/models/cartitem';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements  OnInit {

  constructor(private formBuilder: FormBuilder, private cartService: CartService) {this.createForm(); }
  
  checkoutForm: FormGroup;

  items = [];
  carts :any; 

  createForm(){
    this.checkoutForm = this.formBuilder.group({
     firstname: ['', [Validators.required]],
     lastName: [null, [Validators.required]],
     email: [null, [Validators.required]],
     phone: [null, [Validators.required]],
     addressline1: [null, Validators.required],
     addressLine2: [null],
     city: [null, Validators.required],
     province: [null, Validators.required],
     country: [null, Validators.required],
     postalCode: [null, Validators.required]
    });
   }
    

  ngOnInit(): void {
  }

  
}