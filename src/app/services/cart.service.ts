import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item.';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  baseURL = ('api/shoppingcart')
  URL = ('api')


  constructor(private http: HttpClient) { }

  
  getAllProducts() {
    return this.http.get(`${this.baseURL}/phones`);
  }                          
  

  //post added items
  addToCart(payload) : Observable<CartItem>{
    return this.http.post<CartItem>(`${this.baseURL}`, payload);
  }

  //get items from cart
  getCartItems() {
    return this.http.get(`${this.baseURL}`);
  }

 
  //increase the quantity of products
  increaseQty(id,payload )  {
    payload.quantity  += 1;
    return this.http.put(`${this.baseURL}/${id}`,payload);
  }

  //decrease the quantity of products
  decreaseQty(id,payload )  {
    payload.quantity -=1;
    return this.http.put(`${this.baseURL}/${id}`,payload);
  }


  deleteItem(id:number) : Observable<CartItem>{
   const url = `${this.baseURL}/${id}`;
   
    return this.http.delete(url)
    .pipe(map(response => response as CartItem));
 }  

 

 }






