import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  code = 'contar3segundos(): Promise<string>{\n' +
    '\n' +
    '    // y continua tras el resolve\n' +
    '    return new Promise((resolve, reject) => {\n' +
    '\n' +
    '      let contador = 0;\n' +
    '      let intervalo = setInterval(() => {\n' +
    '\n' +
    '        console.log(++contador);\n' +
    '\n' +
    '        if (contador === 3) {\n' +
    '          resolve(\'todo termino bien\');\n' +
    '          //reject(\'simplemente un error\');\n' +
    '          // limpiaños el intervalo pero no la promesa\n' +
    '          clearInterval(intervalo);\n' +
    '        }\n' +
    '      }, 1000);\n' +
    '\n' +
    '    });\n' +
    '  }' +
    '\n' +
    '//podemos llamar de dos maneras\n' +
    'this.contar3segundos().then(\n' +
    '      (msg) => console.log(\'Terminado1\', msg), // on fullfill\n' +
    '      (error) => console.error(\'Error1\', error) // on reject\n' +
    '    );\n' +
    '\n' +
    'this.contar3segundos().then(\n' +
    '      (msg) => console.log(\'Terminado2\', msg) // on fullfill\n' +
    '    ).catch(\n' +
    '      (error) => console.error(\'Error2:\', error) // on reject\n' +
    '    );';

  constructor() {
    this.contar3segundos();
    // //podemos declarar de dos maneras
    // this.contar3segundos().then(
    //   (msg) => console.log('Terminado1', msg), // on fullfill
    //   (error) => console.error('Error1', error) // on reject
    // );
    //
    this.contar3segundos().then(
      (msg) => console.log('Terminado2', msg) // on fullfill
    ).catch(
      (error) => console.error('Error2:', error) // on reject
    );


  }


  ngOnInit() {
  }

  contar3segundos(): Promise<string> {

    // y continua tras el resolve
    return new Promise((resolve, reject) => {

      let contador = 0;
      let intervalo = setInterval(() => {

        console.log(++contador);

        if (contador === 3) {
          resolve('todo termino bien');
          //reject('simplemente un error');
          // limpiaños el intervalo pero no la promesa
          clearInterval(intervalo);
        }
      }, 1000);

    });
  }


}
