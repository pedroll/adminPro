import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  code = '';

  constructor() {


    // el pipe nos permite hacer transformación de datos
    this.regresaObservable()
      //   .pipe(
      //   // retry(2) // numero de reintentos, se ejecutaría 3 veces, a pesar del error en 2 continua hasta complete
      // )
      .subscribe(
        numero => console.log('Subscripción', numero),             // next
        error => console.error('Error en el observador:', error), // error
        () => console.log('El observador terminó')                      // complete
      );

  }

  regresaObservable(): Observable<any> {
    let contador = 0;

    return new Observable((observer: Subscriber<any>) => {
      let intervalo = setInterval(() => {

        ++contador;
        // en lugar de un valor utilizamos un objeto como es usual en las api
        const salida = {
          valor: contador
        };

        observer.next(salida);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        // if (contador === 2) {
        //   //clearInterval(intervalo);
        //   observer.error('Error 05');
        // }
      }, 1000);

    })
      .pipe(
        map(
          resp => {
            return resp.valor;
          }
        ),       //podemos concatenar multiples operadores
        // filter devuelve valor cuando true
        filter(
          (valor, index) => {
            console.log(valor, index);
            if (valor % 2 === 1) {
              // impar
              return true;
            } else {
              // par
              return false;
            }

          }
        )
      );
  }

  ngOnInit() {
  }

}
