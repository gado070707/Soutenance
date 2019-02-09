import { Component, OnInit } from '@angular/core';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';
import datas from '../../listetruck/trucks.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
 upArrowStatus = true;
 downArrowStatus = true;
 trucks;
 imgBase: number = 1;
 imgMax: number = 0;

  constructor() {
   }

  ngOnInit() {
    this.trucks = datas;
    this.arrowShow();
  }

  arrowPush(sens){
    if(sens == "Up"){
      this.imgBase = this.imgBase - 3;
    }
    else if(sens == "Down") {
      this.imgBase = this.imgBase + 3;
    }
  }

  arrowShow() {
    this.imgMax = this.trucks.length;

    if(this.imgBase == 1) {
      this.upArrowStatus = !this.upArrowStatus;
      this.downArrowStatus = true; 
    }
    else if(this.imgBase == this.imgMax - 2){
      this.downArrowStatus = !this.downArrowStatus;
      this.upArrowStatus = true;
    }
    else {
      this.upArrowStatus = true;
      this.downArrowStatus = true;
    }
  }
}

