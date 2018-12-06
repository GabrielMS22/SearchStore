import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ArticulosPage } from '../articulos/articulos.page';


const routes: Routes = [
  {
    path: 'tabs/:ID',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home/:ID',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'articulos/:ID',
        outlet: 'articulos',
        component: ArticulosPage
      }
    ]
  },
  {
    path: 'tabs',
    redirectTo: 'tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
