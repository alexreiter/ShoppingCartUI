import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  baseURL = ('api/phones')

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${this.baseURL}/phone`);
  }
  addToCart() {
    //return this.http.post(`${this.baseURL}/cart`);
  }
  getCartItems() {
    return this.http.get(`${this.baseURL}/cart`);
  }
  
  emptyCart() {
    return this.http.delete(`${this.baseURL}/cart/empty-cart`);
  }
}


