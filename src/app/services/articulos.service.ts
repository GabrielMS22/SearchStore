import { Injectable } from '@angular/core';


export interface articulos {
  nombreArt: string;
  descripcionArt: string;
  img: string;
}

class Articulo{
        nombreArt;
        descripcionArt;
        img;
        constructor(nombre: string, descripcion:string, img:string){
        this.nombreArt = nombre;
        this. descripcionArt = descripcion;
        this.img = img;
      }
}

@Injectable({
  providedIn: 'root'
})



export class ArticulosService {

      arrArtPrueba: articulos[] =[ {
        nombreArt : 'Computadora',
        descripcionArt : 'La computadora...',
        img: 'assets/img/articDetalle.png'
      },{
          nombreArt: 'Telefono',
          descripcionArt: 'El telefono...',
          img: 'assets/img/articDetalle.png'
        }, {
          nombreArt: 'Computadora',
          descripcionArt: 'La computadora...',
          img: 'assets/img/articDetalle.png'
        }, {
          nombreArt: 'Telefono',
          descripcionArt: 'El telefono...',
          img: 'assets/img/articDetalle.png'
        }, {
          nombreArt: 'algo',
          descripcionArt: 'La computadora...',
          img: 'assets/img/articDetalle.png'
        }, {
          nombreArt: 'Lavadora',
          descripcionArt: 'La computadora...',
          img: 'assets/img/articDetalle.png'
        }, {
          nombreArt: 'Colchon',
          descripcionArt: 'La computadora...',
          img: 'assets/img/articDetalle.png'
        }
    ];
      arrArticulosEl = [
        new Articulo('Laptop Asus GL502VT', 'La marca Asus trae para ti este equipo de cómputo. Posee un desempeño inigualable a la hora de ejecutar tus videojuegos favoritos que requieren altas exigencias técnicas, esto es posible gracias a que integra 3 componentes la tarjeta gráfica Intel HD 530 NVIDIA GeForce GTX970M N16E-GT , la memoria RAM de 16 GB y el procesador Intel Core i7. ', 'assets/img/depHome/Electronicos/1.png'),
        new Articulo('Xbox one X', '¡La consola de Xbox más pequeña y potente ha llegado a tu tienda en línea Walmart, estamos hablando de la Xbox One X!', 'assets/img/depHome/Electronicos/2.png'),
        new Articulo('Nintendo Switch', 'Lleva tu aventura a la región de Kanto y conviértete en el mejor entrenador Pokémon superior mientras luchas contra otros entrenadores con este paquete especial que incluye consola y base Nintendo Switch, controles Joy-Con alusivos a Pikachu y a Eevee, una Poké Ball Plus y un código de descarga para el juego Pokémon Lets Go Pikachu!, que ofrecen una dinámica de juego sencilla para que los jugadores más novatos disfruten de su primera incursión en Pokémon y los entrenadores más veteranos encuentren retos para poner a prueba su destreza. ¡Compra en Walmart.com.mx y recíbelo hasta la puerta de tu hogar!', 'assets/img/depHome/Electronicos/3.png'),
        new Articulo('Playstation 4', '¡La rápida y potente Consola PlayStation 4 Pro 1TB Stand Alone ha llegado a tu tienda de videojuegos en línea Walmart! Juegos y entretenimiento en 4K para mejorar tu experiencia e incrementar tus emociones. Con su alta tecnología, los juegos se llenan de vida mientras que los personajes y ambientes adquieren una textura realista gracias a sus gráficos intensamente nítidos.Además, con la tecnología HDR, es posible disfrutar de una amplia gama de colores y detalles Televisor HDR.Esta nueva consola PSP, tiene para ti fabulosas innovaciones', 'assets/img/depHome/Electronicos/4.png'),
        new Articulo('PlayStation Classic', '¡Lleva la clásica miniconsola de PlayStation y juega los mejores videojuegos sin gastar de más dando unos cuantos clics! Es una miniconsola que incluye 20 juegos precargados como Fantasy VII, Jumping Flash, Ridge Racer Type 4, Tekken 3, Wild Arms y más. Con un tamaño aproximadamente 45 más pequeño que la consola clásica, además incluye 2 controles alámbricos', 'assets/img/depHome/Electronicos/5.png')
      ];
      arrArticulosHombre = [
        new Articulo('Camisa blanca', `Excelente camisa para la oficina
Tela con acabado Contact Fresh que ofrece una mejor transpiración al conecto con la piel brindando una sensación de frescura y comodidad
El cuello y puños están fusionados por lo que no se ampollan, es fácil de planchar`, 'assets/img/depHome/Hombre/1.png'),
        new Articulo('Saco negro', `Composición principal de la tela: fibra de poliéster (poliéster)
El contenido del componente principal de la tela: 70 (%)
Forro: fibra de poliéster
Escena aplicable: ocio
Conveniente para la temporada: otoño`, 'assets/img/depHome/Hombre/2.png'),

        new Articulo('Pantalon beige', `97% Algodón 3% Elastano
                                        Lavado a Máquina
                                        Cinco bolsas
                                        Bolsa con espacio para monedas`, 'assets/img/depHome/Hombre/3.png'),
        new Articulo('Zapatos casuales gris bata manzes cor r hombre', `Calzado casual que impone tendencia, con un estilo y comodidad en toda ocasión
                            Color: Gris.
                            Capellada: Sintético.
                            Suela: Tr.
                            Forro: Textil.
                            Plantilla: Textil.`, 'assets/img/depHome/Hombre/4.png'),
        new Articulo('Zapatos casuales café bata manzes cor r hombre', `Calzado casual que impone tendencia, con un estilo y comodidad en toda ocasión
                            Color: Café.
                            Capellada: Sintético.
                            Suela: Tr.
                            Forro: Textil.
                            Plantilla: Textil.`, 'assets/img/depHome/Hombre/5.png'),
      ];
      random: number;
  constructor() { }

  getArticulosRandom(){
    return this.arrArtPrueba;
  }
  getArticulos(id){
    
    if(id == 1){ return this.arrArticulosEl;
    } else { return this.arrArticulosHombre; }
    
    
  }
  getCantidad(min,max){
    return this.random = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  filterItems(searchTerm,id) {
    if(!searchTerm) return;
    var arr = [];
    if(id == 1){
      console.log(this.arrArticulosEl);
        arr = this.arrArticulosEl.filter((item) => {
          if (item.nombreArt.toString().toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())) {
            return item;
          }
        });
    }
    if(id == 5){ 

        arr = this.arrArticulosHombre.filter((item) => {
          if (item.nombreArt.toString().toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())) {
            return item;
          }
        });
    }
    if(id != 5 && id != 1){
        console.log(this.arrArtPrueba);
        arr = this.arrArtPrueba.filter((item) => {
            if(item.nombreArt.toString().toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())){
                return item;
          }
        });
  }
    return arr;
  }
}
