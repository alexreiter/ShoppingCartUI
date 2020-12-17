import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  plan$ : any = [];
  radioSel:any;
  radioSelected:string;
  tvSelected:string; 
  tvSel: any;
  optionSel: any; 
  tvOptionSelected: string;
  ipSel: any;
  ipSelected: string;
 
    
 
   constructor(private route: ActivatedRoute,
     private router: Router,
     private planService: PlanService) { 
     }
 
 
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

    public calcTotalPrice(){
    let sum = 0;
    
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

    

    



    ngOnInit() : void {

     this.planService.getPlan(parseInt(('id'))).subscribe(res=>this.plan$=res);
  }


}