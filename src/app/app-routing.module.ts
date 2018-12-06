import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Departamentos', loadChildren: './departamentos/departamentos.module#DepartamentosPageModule' },
  { path: 'faq', loadChildren: './about/about.module#AboutPageModule'},
  { path: 'comentarios', loadChildren: './comentarios/comentarios.module#ComentariosPageModule' },
  { path: 'localizacion', loadChildren: './localizacion/localizacion.module#LocalizacionPageModule' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
