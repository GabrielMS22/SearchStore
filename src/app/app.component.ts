import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';
import { Platform, ToastController } from '@ionic/angular';
import { OfertasService } from './providers/ofertas.service';
import { ToastService } from './services/toast.service';
import { MenuService } from './services/menu.service';
import { ModalService } from './services/modal.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  //Variable para el menu de la app
  Menu;
  activeModal;
  showSplash: boolean = true;
  //Funcion para navegar con el menú
  navigate(url){

     //Si se llama a login, presentamos un modal con un timer
    //Para que se despliegue en la visa del login
    if(url == '/login'){
  
    setTimeout(() => {
      this.Modal.presentModalLogout();
      setTimeout(() => {
        this.modalController.dismiss();
      }, 10000);
    }, 150);
    
    //Navegamos a login
    this.route.navigateByUrl(url);

  }else if (url == '/salir') {
      navigator['app'].exitApp();
    }else{
      //Navegamos a la ulr indicada
      this.route.navigateByUrl(url);
    }
 
  

}
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private modalController: ModalController,
    public ofertas: OfertasService,
    public Tost : ToastService,
    public menuSrv: MenuService,
    public Modal: ModalService
  ) {
   

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //Datos del login
      this.Menu = this.menuSrv.getUsers();
        //Guardamos token del dispositivo en FireBase
      this.ofertas.getToken();

      this.ofertas.listenNotif().pipe(
        tap(msg => {
            var message = msg;
            this.Tost.normalToast(message);
           //If the modal has an old modal, we make it zero so it doesnt overlap with upcoming notif
            
           this.activeModal = this.Modal.presentModalOfertas();
        })

      ).subscribe();

      
     

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setTimeout(() => {
        this.showSplash = false;
        
      }, 1000);
    });
  }
}
