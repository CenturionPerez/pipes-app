import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = "Alberto"
  nombreUpper: string = "ALBERTO"
  nombreCompleto: string = "AlberTo PÉRez"

  fecha: Date = new Date(); //el día de hoy

}
