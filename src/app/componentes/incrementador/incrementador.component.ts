import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // en el componente hijo rrecibimos con @Input
  @Input() leyenda = 'Leyenda';
  @Input() porcentaje = 50;

  // declaramos el emisor de evento
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cambiarValor(incremento: number) {

    if (this.porcentaje >= 100 && incremento > 0
      ||
      this.porcentaje <= 0 && incremento < 0) {
      return;
    }
    this.porcentaje = this.porcentaje + incremento;

    // tras actualizar el valor emitimos el evento
    this.cambioValor.emit(this.porcentaje);
  }
}
