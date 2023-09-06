import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:"inicio",component: InicioComponent
  },
  {
    path:"nosotros",component: NosotrosComponent
  },

  {
    path:"productos",component: ProductosComponent
  },
  {
    path:"galeria",component: GaleriaComponent
  },
  {
    path:"contactos",component: ContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
