import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'Camilo';
  nombreUpper: string = 'SAENZ';
  nombreCompleto: string = 'CaMilO sAEnz';
  fecha: Date = new Date(); // Día actual
}
