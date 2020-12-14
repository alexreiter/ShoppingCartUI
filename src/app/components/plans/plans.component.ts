import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanDetails } from 'src/app/models/plandetails';
import { PlanService } from 'src/app/services/plan.service';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  plans: Observable<PlanDetails[]>;

  constructor(route: ActivatedRoute,
    private router: Router,
    private planService: PlanService) {   this.plans = this.planService.getAll()
      
      
      ;}

  ngOnInit(): void {
  }

}
