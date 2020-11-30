import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonesService } from '../../services/phones.service';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { Phone } from '../../models/phone';

    @Component({
      selector: 'app-phones',
      templateUrl: './phones.component.html',
      styleUrls: ['./phones.component.scss']
    })


    export class PhonesComponent implements OnInit{


      //Modal Properties
      category : string;
      categories$;
      phones$;

      
      phones : Observable<Phone[]>;

      
      constructor(
        route: ActivatedRoute,
        private router: Router,
        categoryService: CategoryService, 
        private phonesService: PhonesService){ 
          this.phones$ = this.phonesService.getAll();
          this.categories$ = categoryService.getCategories();

          route.queryParamMap.subscribe(params =>{
          this.category = params.get('category');

          });

         

      }

      

      ngOnInit()  {

        
}
      }

    
