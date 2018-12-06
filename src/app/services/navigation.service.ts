import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(public nav: Location,
              public route: Router) { }

  moveBack(){
    this.nav.back();
  }
  move(path){
    this.route.navigateByUrl(path);
  }
}
