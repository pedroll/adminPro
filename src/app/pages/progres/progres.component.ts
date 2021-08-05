import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styles: []
})
export class ProgresComponent {

  porcentaje1 = 50;
  porcentaje2 = 40;

  get getPorcentaje1(){
    return `${this.porcentaje1}%`
  }
  get getPorcentaje2(){
    return `${this.porcentaje2}%`
  }

  // cambiarValor(incremento: number) {
  //
  //   if (this.porcentaje >= 100 && incremento > 0
  //     ||
  //     this.porcentaje <= 0 && incremento < 0) {
  //     return;
  //   }
  //   this.porcentaje = this.porcentaje + incremento;
  // }
}
