import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegaConColoresComponent } from './paginas/juega-con-colores/juega-con-colores.component';
import { PaginaHomeComponent } from './paginas/pagina-home/pagina-home.component';
import { PracticaCentraEstoComponent } from './paginas/practica-centra-esto/practica-centra-esto.component';

const routes: Routes = [
  { path:"home", component:PaginaHomeComponent},
  { path:"", component:PaginaHomeComponent},
  { path:"centrame", component:PracticaCentraEstoComponent},
  { path:"juega-con-colores", component:JuegaConColoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
