import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonesComponent } from './components/phones/phones.component';
import { ShopComponent } from './components/shop/shop.component';
import { PlansComponent } from './components/plans/plans.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent}, 
  {path: 'phones', component: PhonesComponent}, 
  {path: 'plans', component: PlansComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  { path: 'phones/:id', component: ProductdetailsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ShopComponent, 
  PhonesComponent, 
  PlansComponent, 
  LoginComponent, 
  ShoppingcartComponent, 
  CheckoutComponent, 
  OrderSuccessComponent, 
  ProductdetailsComponent,
]