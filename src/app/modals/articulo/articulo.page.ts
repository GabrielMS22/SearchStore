import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit {

  nombreArt;
  descripcion;
  img;
  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modal.dismiss();
  }
}
