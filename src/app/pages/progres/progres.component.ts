import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styles: []
})
export class ProgresComponent implements OnInit {

  public porcentaje = 50;

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
  }
}
