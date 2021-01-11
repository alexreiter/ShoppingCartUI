import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonesService } from '../../services/phones.service';
import { Phone } from '../../models/phone';

    @Component({
      selector: 'app-phones',
      templateUrl: './phones.component.html',
      styleUrls: ['./phones.component.scss']
    })


    export class PhonesComponent implements OnInit{

      category : string;
      categories$;
      phones$;
      phones : Observable<Phone[]>;

      
      constructor(
        route: ActivatedRoute,
        private router: Router,
        categoryService: CategoryService, 
        private phonesService: PhonesService){ 

          //Fetches all items from the backend
          this.phones$ = this.phonesService.getAll();

          //Fetches all categories from the backend
          this.categories$ = categoryService.getCategories();
          route.queryParamMap.subscribe(params =>{
          this.category = params.get('category');

          });

      }

      

      ngOnInit()  {

        
}
      }

    
