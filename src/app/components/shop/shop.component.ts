import { Component } from '@angular/core';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent {

  public slides = [
    
    { src: '../../assets/img/Sale.png'},
    { src: '../../assets/img/BlackFriday.png'},
    { src: '../../assets/img/iphone.png' }
  
  ];


  constructor() { 

   
  }

 
  ngOnInit(): void {
    
  }

}
