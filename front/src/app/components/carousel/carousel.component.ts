import { Component, OnInit } from '@angular/core';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
 indiceDesBurgers = 0;
 nomDeLImage = ['#imgA', '#imgB', '#imgC'];
 img = '';
  constructor() {
   }

  ngOnInit() {

  }

  defilementDesImagesVersLeBas() {
    if (this.indiceDesBurgers <= 0 ) {
      this.indiceDesBurgers++;
      this.img = this.nomDeLImage[this.indiceDesBurgers];
    } else if (this.indiceDesBurgers == 1 ) {
      this.indiceDesBurgers++;
      this.img = this.nomDeLImage[this.indiceDesBurgers];
    } else if (this.indiceDesBurgers == 2 ) {
      this.img = this.nomDeLImage[this.indiceDesBurgers];
    }
  }

  defilementDesImagesVersLeHaut() {
    if (this.indiceDesBurgers == 2 ) {
      this.indiceDesBurgers--;
      this.img = this.nomDeLImage[this.indiceDesBurgers];
    } else if (this.indiceDesBurgers == 1 ) {
      this.indiceDesBurgers--;
      this.img = this.nomDeLImage[this.indiceDesBurgers];
    } else if (this.indiceDesBurgers == 0 ) {
    this.img = this.nomDeLImage[this.indiceDesBurgers];
    }
  }
}

