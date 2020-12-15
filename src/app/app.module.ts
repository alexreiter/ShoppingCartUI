import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { PhonesComponent } from './components/phones/phones.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { PlansComponent } from './components/plans/plans.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CategoryService } from './services/category.service';
import { PhonesService } from './services/phones.service';
import { CartService } from './services/cart.service';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PlanService } from './services/plan.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { PlanComponent} from './components/plan/plan.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    PhonesComponent,
    FooterComponent,
    CarouselComponent,
    ShowcaseComponent,
    PlansComponent,
    LoginComponent,
    ShoppingcartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    ProductdetailsComponent,
    PlanComponent
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule, 
    MatIconModule, 
    MatGridListModule, 
    FlexLayoutModule, 
    MatCardModule, 
    MatButtonModule, 
    MatStepperModule, 
    MatFormFieldModule,
    MatInputModule, 
    HttpClientModule, 
    MatExpansionModule,
    ReactiveFormsModule, 
    FormsModule
    
  ],
  providers: [CategoryService, PhonesService, CartService, PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
