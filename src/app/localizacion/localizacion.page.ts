import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { ComentariosService } from '../services/comentarios.service';
import { ProvlocaliService } from '../providers/provlocali.service';

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.page.html',
  styleUrls: ['./localizacion.page.scss'],
})
export class LocalizacionPage implements OnInit {

  constructor( public loadMessage:ToastService,
               public solicitud: ComentariosService,
               public localizacion:ProvlocaliService
               ) { }

  response: any;
  ngOnInit() {
  
  }

  load(){
    this.loadMessage.presentLoading('Buscando trabajador, porfavor espere');
    this.solicitud.requestTrabajador();
    
    this.response = this.localizacion.sendNotification();
    console.log(this.response);
  }
 
}
