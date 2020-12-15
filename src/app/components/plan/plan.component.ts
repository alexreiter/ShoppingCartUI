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
  linespeed: string;
 

  @ViewChild(MatAccordion) accordion: MatAccordion;
 
    
 
   constructor(private route: ActivatedRoute,
     private router: Router,
     private planService: PlanService) { 
     }
 
    
    
 
    

  ngOnInit(): void {

        /*
    this.plan$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.planService.getPlan(parseInt(params.get('id'))
         ))
      );
      */

     this.planService.getPlan(parseInt(('id'))).subscribe(res=>this.plan$=res);
  }

}
