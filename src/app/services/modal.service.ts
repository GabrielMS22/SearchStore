import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogoutModalPage } from '../logout-modal/logout-modal.page';
import { OfertasModalPage } from '../ofertas-modal/ofertas-modal.page';
import { ArticuloPage } from '../modals/articulo/articulo.page';

@Injectable({
  providedIn: 'root'
})

//Servicio para crear un modal
export class ModalService {

  constructor(public modalController: ModalController) { }
  //Funcion para crear el modal
  //Regresa un modal de logout
  async presentModalLogout() {
    const modal = await this.modalController.create({
      component: LogoutModalPage,
      keyboardClose: true

    });
    return await modal.present();
  }

  async presentModalOfertas() {
    const modal = await this.modalController.create({
      component: OfertasModalPage,
      keyboardClose: true

    });
    return await modal.present();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: LogoutModalPage,
      keyboardClose: true

    });
    return await modal.present();
  }
  //Modal para los articulos
  async modalArticulo(nombreArt, descripcion, img) {

    const modal = await this.modalController.create({
      component: ArticuloPage,
      componentProps: { nombreArt, descripcion, img }
    });
    return await modal.present();
  }


}
