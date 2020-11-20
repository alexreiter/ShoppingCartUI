import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { cards } from '../cards';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})


export class PhonesComponent implements OnInit{

  cards = cards;
  
  constructor() { }

  

  
  ngOnInit(): void {
  }

}
