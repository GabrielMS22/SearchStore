import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  currentId: number;
  locDepar: string;


  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.getId();
    //console.log('Ubicacion')
  }

 
  getId(): void {
    this.currentId = +this.route.snapshot.paramMap.get('ID');
    switch (this.currentId) {
      case 1: this.locDepar = 'electronica.gif';
        break;
      case 2: this.locDepar = 'cocina.gif';
        break;
      case 3: this.locDepar = 'higiene.gif';
        break;
      case 4: this.locDepar = 'hogar.gif';
        break;
      case 5: this.locDepar = 'hombre.gif';
        break;
      case 6: this.locDepar = 'mujeres.gif';
        break;
      case 7: this.locDepar = 'nino.gif';
        break;
      case 8: this.locDepar = 'muebleria.gif';
        break;
    }
    //console.log(this.currentId);
  }

}
