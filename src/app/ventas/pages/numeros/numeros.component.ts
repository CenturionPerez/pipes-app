import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html'
})
export class NumerosComponent {
  api: string = 'https://angular.io/api/common/';
  
  ventasNetas: number = 2567789.5567;
  porcentaje: number = 0.5867;
}
