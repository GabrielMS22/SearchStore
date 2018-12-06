import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor() { }
  Departamentos = [
    {
      Nombre: 'Electrónicos',
      Descripcion: 'Los mejores electronicos!',
      img: 'assets/img/depHome/Electronicos/Electronicos.png',
      id: 1,
      Mapa: ''
    },
    {
      Nombre: 'Cocina',
      Descripcion: 'El mejor calzado!',
      img: 'assets/img/depHome/Cocina/1.png',
      id: 2,
      Mapa: ''

    },
    {
      Nombre: 'Higiene',
      Descripcion: 'La mejor comida de temporada!',
      img: 'assets/img/depHome/Higiene/1.png',
      id: 3,
      Mapa: ''

    },
    {
      Nombre: 'Hogar',
      Descripcion: 'El mejor perfume de la ciudad!',
      img: 'assets/img/depHome/Hogar/1.png',
      id: 4,
      Mapa: ''

    },
    {
      Nombre: 'Hombre',
      Descripcion: 'El mejor perfume de la ciudad!',
      img: 'assets/img/depHome/Hombre/1.png',
      id: 5,
      Mapa: ''

    },
    {
      Nombre: 'Mujer',
      Descripcion: 'El mejor perfume de la ciudad!',
      img: 'assets/img/depHome/Mujer/1.png',
      id: 6,
      Mapa: ''

    },
    {
      Nombre: 'Niños',
      Descripcion: 'El mejor perfume de la ciudad!',
      img: 'assets/img/depHome/Niños/1.png',
      id: 7,
      Mapa: ''

    },
    {
      Nombre: 'Mueblería',
      Descripcion: 'El mejor perfume de la ciudad!',
      img: 'assets/img/depHome/Muebleria/1.png',
      id: 8,
      Mapa: ''

    }
  ];


  getDepartamentos(){
    return this.Departamentos;
  }

}
