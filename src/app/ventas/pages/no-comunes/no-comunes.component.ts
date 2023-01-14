import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
    //urls
    api: string = 'https://angular.io/api/common/';

    //i18nSelect
    nombre: string = 'Alberto';
    genero: string = 'masculino';

    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino' : 'invitarla'
    }

    //i18nPlural
    clientes: string[] = ['Maria','Pedro','Juan'];

    clientesMapa = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos 1 cliente esperando.',
      '=2': 'tenemos 2 clientes esperando.',
      'other': 'tenemos # clientes esperando.' //other es resto de opciones y para conseguir el valor de longitud usamos '#'
    }

    public cambiarCliente(){
      this.nombre == 'Alberto' ? (this.nombre = 'Lucia', this.genero = 'femenino') : (this.nombre = 'Alberto', this.genero = 'masculino');
    }
    public borrarCliente(){
      this.clientes.pop();
    }

    //KeyValue Pipe
    personas = {
      nombre: 'Alberto',
      edad:35,
      direccion: 'Ottawa, Canadá'
    }

    //Json Pipe
    heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robbin Hood',
        vuela: false
      },
      {
        nombre: 'Batman',
        vuela: false
      }
    ];

    //Async Pipe
    miObservable = interval(1000); //Primero emitira 0, 1 y sucesivamente hasta 1000

    valorPromesa = new Promise((resolve, reject) => {
      let seconds = 10000;
      setTimeout(() => { 
        resolve(`Promesa resuelta al pasar ${seconds} segundos y medio.`);
      }, seconds);
    });
}
