import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { NavigationService } from '../services/navigation.service';


@Component({
  selector: 'app-ofertas-modal',
  templateUrl: './ofertas-modal.page.html',
  styleUrls: ['./ofertas-modal.page.scss'],
})
export class OfertasModalPage implements OnInit {

  random: number;
  constructor(public Ctlr: ModalController,
              public nav: NavigationService) { }

  ngOnInit() {
   this.getRandomNumber(1,4);
  }

  getRandomNumber(min,max){

    this.random = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  move(){
    this.Ctlr.dismiss();
    this.nav.move('/Departamentos');
  }

}
