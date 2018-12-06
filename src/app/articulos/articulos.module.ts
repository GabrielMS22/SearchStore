import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArticulosPage } from './articulos.page';

import { ScrollingModule } from '@angular/cdk/scrolling';




const routes: Routes = [
  {
    path: '',
    component: ArticulosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticulosPage]
})
export class ArticulosPageModule {}
