import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaHomeComponent } from './paginas/pagina-home/pagina-home.component';
import { FlexLogoComponent } from './componentes/flex-logo/flex-logo.component';
import { CardBienvenidaComponent } from './componentes/card-bienvenida/card-bienvenida.component';
import { LoaderComponent } from './componentes/loader/loader.component';
import {CardModule} from 'primeng/card';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { PracticaCentraEstoComponent } from './paginas/practica-centra-esto/practica-centra-esto.component';
import { CardHomeComponent } from './componentes/card-home/card-home.component';
import { CentrameCardComponent } from './componentes/centrame-card/centrame-card.component';
import { JuegaConColoresComponent } from './paginas/juega-con-colores/juega-con-colores.component';
import { TablaColorComponent } from './componentes/tabla-color/tabla-color.component';
import { NavbarInstruccionesComponent } from './paginas/navbar-instrucciones/navbar-instrucciones.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaHomeComponent,
    FlexLogoComponent,
    CardBienvenidaComponent,
    LoaderComponent,
    SidebarComponent,
    PracticaCentraEstoComponent,
    CardHomeComponent,
    CentrameCardComponent,
    JuegaConColoresComponent,
    TablaColorComponent,
    NavbarInstruccionesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
