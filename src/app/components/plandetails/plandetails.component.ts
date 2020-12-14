import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { PlanDetails } from 'src/app/models/plandetails';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.css']
})
export class PlandetailsComponent  {

 plan$ : Observable<PlanDetails>;



  constructor(private route: ActivatedRoute,
    private router: Router,
    private planService: PlanService) { 

    
    }

    
    
    ngOnInit() : void {

      this.plan$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.planService.getPlan(parseInt(params.get('id'))))
      );
  
    
  }

}

