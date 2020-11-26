import { Component, OnInit } from '@angular/core';
import { shoppingcarts } from '../shoppingcart';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class  NavbarComponent implements OnInit{

  constructor() { }

  collapsed=true;
  shoppingcarts = shoppingcarts;
  
  ngOnInit(): void {
  }

}
