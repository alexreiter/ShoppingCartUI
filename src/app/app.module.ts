import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { PhonesComponent } from './phones/phones.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { ItempageComponent } from './itempage/itempage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { OrderComponent } from './order/order.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



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
    ItempageComponent,
    ShoppingcartComponent,
    OrderComponent
    
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
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
