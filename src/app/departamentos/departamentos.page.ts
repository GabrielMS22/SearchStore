import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SocialsharingService } from '../services/socialsharing.service';
import { DepartamentosService } from '../services/Departamentos/departamentos.service';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.page.html',
  styleUrls: ['./departamentos.page.scss'],
})
export class DepartamentosPage implements OnInit {

  //Fab seleccionado
  selectedFab: boolean = false;
  Departamentos;
  url;
  constructor(private socialshare: SocialsharingService,
              private depart: DepartamentosService,
              public platform: Platform,
              public route: Router,
              public location: Location
              ) { }
  
  ngOnInit() {
      this.Departamentos = this.depart.getDepartamentos();
      //Atrapamos eventos de backbutton
      this.platform.backButton.subscribeWithPriority(9999, () => {
          this.url =  this.route.url;
          console.log(this.url);
          if(this.url == '/Departamentos' || this.url == '/login'){}
         
          else{
            this.location.back();
          }
         console.log('nothing')
      });
      
  }

    openSocial(network, container) {
    let message = 'Share in ' + network;
    console.log(message)
    //Llamamos a servicio para compartir
    this.socialshare.socialShare(network);
    this.toggleLists(container);
  }

  clickMainFAB(container) {
    let message = 'Clicked open social menu';
    this.selectedFab = !this.selectedFab;
    this.toggleLists(container);
  }

 
    toggleLists(container) {
    var fabButton = document.getElementById(container).querySelector('ion-fab-button');
    var fabLists = document.getElementById(container).querySelectorAll('ion-fab-list');
    fabButton.activated = !fabButton.activated;
    for (var i = 0; i < fabLists.length; i++) {
      fabLists[i].activated = !fabLists[i].activated;
    }
  }
}
