import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonesComponent } from './components/phones/phones.component';
import { ShopComponent } from './components/shop/shop.component';
import { PlansComponent } from './components/plans/plans.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PlanComponent } from './components/plan/plan.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {path: 'shop', component: ShopComponent}, 
  {path: 'phones', component: PhonesComponent}, 
  {path: 'plans', component: PlansComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'checkout', component: CheckoutComponent},
  { path: 'phones/:id', component: ProductdetailsComponent },
  {path: 'plan', component: PlanComponent},
  {path: 'order', component: OrderComponent}



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
  OrderComponent, 
  ProductdetailsComponent,
  PlanComponent
]