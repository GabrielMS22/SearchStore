import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Tabs } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../services/articulos.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterViewInit, OnInit{

  //Selecionamos tabs
  @ViewChild(Tabs) tabs: Tabs;
  //Variable para tener el tab seleccionado
  selectedTab: string;
  id:number;
  cantidad: number;
  constructor(private route: ActivatedRoute,
              public art: ArticulosService){}
  getID(){
    this.id = +this.route.snapshot.paramMap.get('ID');
    //console.log(this.id);
  }
  ngAfterViewInit(): void {
    //Nos suscribimos a los cambios del tab y asignamos nombre para colores en el frontend
    this.tabs.ionChange.subscribe( (ev) => {
      this.tabs.getSelected().then( (tab) =>{
        this.selectedTab = tab.tab;
      })
    })

    
  }

  ngOnInit(){
    this.getID();
    this.cantidad = this.art.getCantidad(15,30);
  }
  
}
