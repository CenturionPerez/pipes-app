import { ChangeDetectorRef, Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {
  public isActivateMayus: boolean = false;
  public orderBy?: keyof Heroe;

  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.rojo
    }
  ];

  constructor() { }

  activateMayus(): void {
    this.isActivateMayus = !this.isActivateMayus;
  }

  changeOrder(value: keyof Heroe){
    this.orderBy = value;
  }

}
