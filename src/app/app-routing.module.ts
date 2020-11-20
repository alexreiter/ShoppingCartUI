import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { ShopComponent } from './shop/shop.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { ItempageComponent } from './itempage/itempage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent}, 
  {path: 'phones', component: PhonesComponent}, 
  {path: 'plans', component: PlansComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'itempage', component: ItempageComponent}, 
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'order', component: OrderComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShopComponent, PhonesComponent, PlansComponent, LoginComponent, ItempageComponent, ShoppingcartComponent, OrderComponent]