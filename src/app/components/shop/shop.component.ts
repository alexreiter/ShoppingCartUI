import { Component } from '@angular/core';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent {

 
  public marketing = [
    
    { img: '../../assets/img/Phones.png'},
    { img: '../../assets/img/Tablet.png'},
    { img: '../../assets/img/SIM.png' },
    { img: '../../assets/img/Internet.png'},
    { img: '../../assets/img/Accessories.png'},
    { img: '../../assets/img/offers.png' },
  
  ];

  constructor() { 

   
  }

 
  ngOnInit(): void {
    
  }

}
