import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { fadeIn } from './carousel.animations';




@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})


export class CarouselComponent {
  

  
  currentSlide = 0;

  constructor(config: NgbCarouselConfig) {
    config.interval = 500;
    fadeIn;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  


  ngOnInit(): void {
  }

}
