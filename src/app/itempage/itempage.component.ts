import { Component, OnInit } from '@angular/core';
import { planinfos } from '../planinfos';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {

  planinfo=planinfos;

  constructor() { }

  ngOnInit(): void {
  }

}
