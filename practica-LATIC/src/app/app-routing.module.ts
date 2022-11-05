import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegaConColoresComponent } from './paginas/juega-con-colores/juega-con-colores.component';
import { NavbarInstruccionesComponent } from './paginas/navbar-instrucciones/navbar-instrucciones.component';
import { PaginaHomeComponent } from './paginas/pagina-home/pagina-home.component';
import { PracticaCentraEstoComponent } from './paginas/practica-centra-esto/practica-centra-esto.component';

const routes: Routes = [
  { path:"home", component:PaginaHomeComponent},
  { path:"", component:PaginaHomeComponent},
  { path:"centrame", component:PracticaCentraEstoComponent},
  { path:"practica-final", component:JuegaConColoresComponent},
  { path:"sidebar-instrucciones", component:NavbarInstruccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
