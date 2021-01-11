import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cartitem';
import { Phone } from '../models/phone';
import { ShoppingCart } from '../models/shoppingcart';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  baseURL = ('api/shoppingcart')
  URL = ('api')



  constructor(private http: HttpClient) { }

 //Creates a shopping cart with id
  create(cartId : string){
   return this.http.post<ShoppingCart>(`${this.baseURL}`, cartId);
 }

 //Gets a cart from the backend
  getCart(cartId: string){
    return this.http.get<ShoppingCart>(this.baseURL + cartId);
  }
  
  //Gets all items and plans from backend
  getAllProducts() {
    return this.http.get(`${this.URL}/phones`);
  }                          
  

  //Add item to the backend
  addToCart(payload) : Observable<CartItem>{
    return this.http.post<CartItem>(`${this.baseURL}`, payload);
  }

  //get items from cart
  getCartItems() {
    return this.http.get(`${this.baseURL}`);
  }

  //Get the total quantity of cart from backend
 getQuantity(id,quantity){
   return this.http.get(`${this.baseURL}/${id}`, quantity)
 }
 
  //increases the quantity of products
  increaseQty(id,payload )  {
    return this.http.put(`${this.baseURL}/${id}`,payload);
  }

  //decreases the quantity of products
  decreaseQty(id, payload)  {
   
    return this.http.put(`${this.baseURL}/${id}`, payload);
  }

  //Remove all from the cart
  clearCart(){
    this.items = [];
    return this.items;
  }

  //Deletes an item from the cart
  deleteItem(id:number) : Observable<CartItem>{
   const url = `${this.baseURL}/${id}`;
   
    return this.http.delete(url)
    .pipe(map(response => response as CartItem));
 }  

 

 }






