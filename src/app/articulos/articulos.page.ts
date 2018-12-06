import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { ModalService } from '../services/modal.service';
import { ModalController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.page.html',
  styleUrls: ['./articulos.page.scss'],
})
export class ArticulosPage implements OnInit{

  articulos = [];
  busqueda: string;
  interval;
  listbusqueda = [];
  currentId;
  spinner: boolean = true;
  constructor(public artic: ArticulosService,
              public modal:ModalService,
              public modalCtrl: ModalController,
              private route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      this.spinner = false;
      this.getArticulos();
    }, 2000);
    
   
    
  }

  getArticulos(): void {
    this.currentId = +this.route.snapshot.paramMap.get('ID');
    //Si la busqueda es de los articulos con id 1 o 5..
    if(this.currentId == 1 || this.currentId == 5){ this.articulos = this.artic.getArticulos(this.currentId); }
    else { this.articulos = this.artic.getArticulosRandom(); } //si no, solo traemos los articulos aleatorios
    console.log(this.articulos)
  }
  
  ionViewDidLoad(){
    
    this.filteredItems();
  }

  filteredItems(){
    this.listbusqueda = [];
    this.listbusqueda = this.artic.filterItems(this.busqueda,this.currentId);
    console.log(this.listbusqueda);
  }

    busq(){
        this.listbusqueda = [];
        this.buscar(this.busqueda);
     
    }

    buscar(palabra){

      for( let i = 0 ; i < this.articulos.length ; i++){
          let a = this.articulos[i].nombreArt;
          
          if( a.startsWith(palabra) ){
            console.log(a);
            this.listbusqueda.push(a);
          }
      }
      

    }
  modalArticulo(nombre,descripcion,img){
      this.modal.modalArticulo(nombre,descripcion,img);
  }

  
      doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 2000);
      }
}

