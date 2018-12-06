import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  Menu: Array<any>;
  constructor() { }
  getUsers() {
    return this.Menu = [
      {
        nombre: 'Departamentos',
        icon: 'map',
        ref: '/Departamentos'
      },
      {
        nombre: 'Módulo de localización',
        icon: 'navigate',
        ref: '/localizacion'
      },
      {
        nombre: 'Ayuda',
        icon: 'help-circle',
        ref: '/faq'
      },
      {
        nombre: 'Comentarios',
        icon: 'happy',
        ref: '/comentarios'
      },
      {
        nombre: 'Cerrar Sesión',
        icon: 'contact',
        ref: '/login'
      },
      {
        nombre: 'Cerrar aplicación',
        icon: 'power',
        ref: '/salir'
      }
    ];
  }
}
