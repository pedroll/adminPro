import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  code = '';

  constructor() {


    // el pipe nos permite hacer transformacion de datos
    this.regresaObservable().pipe(
      retry(2) // numero de reintentosm se ejecutaria 3 vecesm apesar del error en 2 continua hasta complete
    ).subscribe(
      numero => console.log('Subscripcion', numero),             // next
      error => console.error('Error en el observador:', error), // error
      () => console.log('El observador terminó')                      // complete
    );

  }

  regresaObservable(): Observable<number> {

    let contador = 0;
    return new Observable(observer => {
      let intervalo = setInterval(() => {
        ++contador;
        observer.next(contador);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador === 2) {
          //clearInterval(intervalo);
          observer.error('Error 05');
        }
      }, 1000);

    });
  }

  ngOnInit() {
  }

}
