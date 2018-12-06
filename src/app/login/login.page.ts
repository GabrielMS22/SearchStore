import { Component, OnInit } from '@angular/core';
import { usuarios } from './usuarios';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   constructor(public loadingController: LoadingController, public router: Router, public toastController:ToastController) { }
  ngOnInit() {

  }

    public Flag: boolean = false;
    Usuarios: usuarios[] = [

      {
        name: 'gabriel',
        password: '140225ga'
      },
      {
        name: 'david',
        password: 'sanqui'
      },
      {
        name: 'kiki',
        password: 'sandi'
      }
    ];
  
    user = {
        nombre: '',
        contrasenia : ''
        };

  
   public onSubmit(){
       this.presentLoading();
       for(let i = 0 ; i<this.Usuarios.length ; i++){
         
            if(this.Usuarios[i].name == this.user.nombre){
              console.log('Usuario correcto!');
              if (this.Usuarios[i].password == this.user.contrasenia){
                setTimeout( () => { 
                  this.Flag = true;
                  this.passwordToast('Pregunte por nuestras promociones!','bottom');
                 }, 3000);        
              }else{
                setTimeout(() => { this.passwordToast('Datos incorrectos!', 'middle'); }, 3000);
              }
            }
       }
       
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Conectando...',
      duration: 2000,
    });
    return await loading.present();
  }
 
  
  

  async passwordToast(Message, position) {
    const toast = await this.toastController.create({
      message: Message,
      position: position,
      duration: 2000,
      cssClass: 'custom-toast'
    });
    toast.present();
  }
}
