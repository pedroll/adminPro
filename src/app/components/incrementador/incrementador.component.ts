import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.claseBoton= `btn ${this.claseBoton}`;
  }
  // impediamos ver entrads erroneas en el input, referenciamos con # el input al que queremos c ambiar valor
  @ViewChild('porcentajex') campoInput: ElementRef;
  // en el componente hijo rrecibimos con @Input
  @Input() leyenda = 'Leyenda';
  @Input() porcentaje = 50;
  @Input() claseBoton: string = "btn btn-primary"
  // declaramos el emisor de evento
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();






  cambiarValor(incremento: number) {

    if (this.porcentaje >= 100 && incremento > 0) {
      this.porcentaje = 100;
      this.cambioValor.emit(this.porcentaje);

      return;
    }
    if (
      this.porcentaje <= 0 && incremento < 0) {
      this.porcentaje = 0;
      this.cambioValor.emit(this.porcentaje);

      return;
    }
    this.porcentaje = this.porcentaje + incremento;

    // tras actualizar el valor emitimos el evento
    this.cambioValor.emit(this.porcentaje);
  }

  // cuando cambia valor incluso tipeando numero, evitamos que este fuera de rango
  enCambio(event: number) {
    // console.log(event);
    // const elementoHTML: any = document.getElementsByName('porcentaje')[0];
    if (event >= 100) {
      this.porcentaje = 100;
    } else if (event <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = event;
    }

    // elementoHTML.value = this.porcentaje;
    this.campoInput.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);

  }
}
