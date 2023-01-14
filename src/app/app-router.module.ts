import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// modules path
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**', //Si introduce un path no existente
    redirectTo: '' //Redirige al componenete principal
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //definimos las routas
  ],
  exports:[
    RouterModule //las exportamos
  ]
})
export class AppRouterModule { }
