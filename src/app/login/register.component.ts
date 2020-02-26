import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  formularioRegistro: FormGroup;

  constructor() {
  }

  ngOnInit() {

    this.formularioRegistro = new FormGroup({
        nombre: new FormControl(null, Validators.required),
        correo: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        condiciones: new FormControl(null, Validators.required),

      },
      // validacion general formulario
      {
        validators: this.sonIguales('password', 'password2')
      });

    //rellenamos el formulario automático para desarrollo
    this.formularioRegistro.setValue({
      nombre: 'Test',
      correo: 'test@tes.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }

  registrarUsuario() {
    console.log('Formulario valido', this.formularioRegistro.valid);
    console.log(this.formularioRegistro.value);
    console.log(this.formularioRegistro);
  }

  sonIguales(campo1: string, campo2: string) {

    return (group: FormGroup) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        //el error es null
        return null;
      }
      // retorna el error de validacion
      return {
        sonIguales: true
      };
    };


  }
}
