import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PhonesService } from '../services/phones.service';
import { Phone } from '../models//phone';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {


  phone : Phone;

  constructor(
              private route: ActivatedRoute, 
              private phoneService: PhonesService) { }

   ngOnInit() : void {
 
   this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.phoneService.getPhone(+params.get('id'))
      )
   ).subscribe(phone => this.phone = phone);

  }

 
}
