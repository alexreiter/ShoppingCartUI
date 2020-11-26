import { Component, OnInit } from '@angular/core';
import { planinfos } from '../planinfos';
import { PhonesService } from '../services/phones.service';


@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {

  planinfo=planinfos;
  articleId : String = '';
  articleDetails : Object = {};
 

  constructor(private phonesService: PhonesService) { }

  ngOnInit()   {

   
    
  }

}
