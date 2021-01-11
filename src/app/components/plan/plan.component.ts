import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  plan$ : any = [];
  radioSel:boolean = true;
  radioSelected:string;
  tvSelected:string; 
  tvSel: any;
  optionSel: any; 
  tvOptionSelected: string;
  ipSel: any;
  ipSelected: string;
  mobileSel: any;
  mobileSelected: string;
  cartService: any;
  

   constructor(private route: ActivatedRoute,
     private router: Router,
     private planService: PlanService) { 
     }
 
 //Gets selected option
     getSelecteditem(){
      this.radioSel = this.plan$.find(plan => plan.value === this.radioSelected);
    }

    getSelectedTv(){
      
      this.tvSel = this.plan$.find(plan => plan.value === this.tvSelected);
    }

    getSelectedTvOption(){
      
      this.optionSel = this.plan$.find(plan => plan.value === this.tvOptionSelected);
    }

    getSelectedIp(){
      
      this.ipSel = this.plan$.find(plan => plan.value === this.ipSelected);
    }

    getSelectedMobile(){
      
      this.mobileSel = this.plan$.find(plan => plan.value === this.mobileSelected);
    }
    onItemChange(){
      this.getSelecteditem();
      console.log("radioSelected = ", this.radioSelected);
    }

    onTvChange(){
      this.getSelectedTv();
      console.log("tvSelected = ", this.tvSelected);
    }

    onOptionChange(){
      this.getSelectedTvOption();
      console.log("tvOptionSelected = ", this.tvOptionSelected);
    }

    onIpChange(){
      this.getSelectedIp();
      console.log("ipSelected = ", this.ipSelected);
    }

    onMobileChange(){
      this.getSelectedMobile();
      console.log("mobileSelected = ", this.mobileSelected);
    }

   
    //Calculates the total price based on the selected option
    public calcTotalPrice(){
    let sum = 0;
    
    if((this.radioSelected && this.tvSelected && this.tvOptionSelected && this.ipSelected && this.mobileSelected)){
      sum +=(+this.radioSelected) + (+this.tvSelected) + (+this.tvOptionSelected) + (+this.ipSelected) + (+this.mobileSelected);
      Number.isInteger(sum);
      console.log("sum =", sum);
      return sum;
    }


    if((this.radioSelected && this.tvSelected && this.tvOptionSelected && this.ipSelected)){
      sum +=(+this.radioSelected) + (+this.tvSelected) + (+this.tvOptionSelected) + (+this.ipSelected);
      Number.isInteger(sum);
      console.log("sum =", sum);
      return sum;
    }

    if((this.radioSelected && this.tvSelected && this.tvOptionSelected)){
      sum +=(+this.radioSelected) + (+this.tvSelected) + (+this.tvOptionSelected);
      Number.isInteger(sum);
      console.log("sum =", sum);
      return sum;
    }

    if((this.radioSelected && this.tvSelected && this.ipSelected)){
      sum +=(+this.radioSelected) + (+this.tvSelected) + (+this.ipSelected);
      Number.isInteger(sum);
      console.log("sum =", sum);
      return sum;
    }

    if((this.radioSelected && this.tvSelected)){
      sum +=(+this.radioSelected) + (+this.tvSelected);
      Number.isInteger(sum);
      console.log("sum =", sum);
      return sum;
    }

    if((this.radioSelected && this.ipSelected)){
      sum +=(+this.radioSelected) + (+this.ipSelected);
      Number.isInteger(sum);
      console.log("sum =", sum);
      return sum;
    }
      else 
      return this.radioSelected;
    
     }

       //Add a plan to the shopping cart
       addItemToCart( id, name, price, quantity, img) : void {
        let payload = {
          name: name,
          price: price = this.calcTotalPrice(), 
          quantity: quantity,
          img: img
        };
        this.planService.addToCart(payload).subscribe(() => {
          this.planService.getPlan(id);
          console.log("payload =", payload)
          alert('Product Added');
        });
      }

    ngOnInit() : void {

     this.planService.getPlan(parseInt(('id'))).subscribe(res=>this.plan$=res);
  }


}