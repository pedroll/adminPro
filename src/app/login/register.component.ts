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
      correo: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(null, Validators.required),

    });
  }

  registrarUsuario() {
    console.log(this.formularioRegistro.value);
  }
}
