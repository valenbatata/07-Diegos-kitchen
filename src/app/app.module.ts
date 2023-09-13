import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './secciones/contactos/contactos.component';
import { FooterComponent } from './secciones/footer/footer.component';
import { GaleriaComponent } from './secciones/galeria/galeria.component';
import { HeaderComponent } from './secciones/header/header.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { ProductosComponent } from './secciones/productos/productos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    GaleriaComponent,
    ProductosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
