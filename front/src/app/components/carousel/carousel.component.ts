import { Component, OnInit } from '@angular/core';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
 indiceDesBurgers = 0;
 upArrowStatus = true;
 downArrowStatus = true;
 nomDeLImage = ['#imgA', '#imgB', '#imgC'];
 img = '';
  constructor() {
   }

  ngOnInit() {
    this.arrowShow();
  }

  defilementDesImagesVersLeBas() {
    this.indiceDesBurgers++;
    this.img = this.nomDeLImage[this.indiceDesBurgers];
  }

  defilementDesImagesVersLeHaut() {
    this.indiceDesBurgers--;
    this.img = this.nomDeLImage[this.indiceDesBurgers];
  }

  arrowShow() {
    if(this.indiceDesBurgers == 2) {
      this.downArrowStatus = !this.downArrowStatus;
    }
    else if(this.indiceDesBurgers == 0){
      this.upArrowStatus = !this.upArrowStatus;
    }
    else {
      this.upArrowStatus = true;
      this.downArrowStatus = true;
    }
  }
}

