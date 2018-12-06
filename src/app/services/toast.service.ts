import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public loadingController: LoadingController, public toastController: ToastController) { }

  //Presenta un mensaje de carga 
  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message: message,
      duration: 15000,
    });
    return await loading.present();
  }

  //Presenta un toast en la vista
  async passwordToast(Message, position, csClasse) {
    const toast = await this.toastController.create({
      message: Message,
      position: position,
      duration: 2000,
      cssClass: csClasse
    });
    toast.present();
  }

  async normalToast(Message) {
    const toast = await this.toastController.create({
      message: Message.body,
      color: 'light',
      duration: 4000
    });
    toast.present();
  }

}
