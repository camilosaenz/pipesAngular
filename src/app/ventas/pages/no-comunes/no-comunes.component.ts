import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Camilo';
  genero: string = 'masculino';
  invitacion = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  // i18nPlural
  clientes: string[] = ['Stella', 'Rubian', 'Nicolas'];
  clientesMap = {
    '=0': 'no tenemos níngun cliente esperando!.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  // Slice

  cambiarNombre() {
    this.nombre = 'Leidy';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // keyValue Pipe

  persona = {
    nombre: 'Camilo',
    edad: 25,
    direccion: 'Tenjo, Colombia',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Wonder Woman',
      vuela: true,
    },
  ];

  // Async Pipe

  myObservable = interval(1000); // Intervalo ascendente de 0 en adelante.

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fin de la Promesa!');
    }, 3500);
  });
}
