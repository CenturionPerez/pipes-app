import { Component, OnInit } from '@angular/core';
//Añadimos una animacion importada
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent implements OnInit{
  constructor(private primeNgConfig: PrimeNGConfig){ }
  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }
}
