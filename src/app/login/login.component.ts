import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UsuarioService} from '../services/usuario/usuario.service';
import {Usuario} from '../models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame = false;

  constructor(public router: Router,
              public usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 0) {
      this.recuerdame = true;
    }

  }

  ingresar(formulario: NgForm) {
    console.log('Ingresando', formulario.value);
    // if (formulario.invalid) { return; }

    const usuario = new Usuario(null, formulario.value.email, formulario.value.password);
    console.log('Ingresando', formulario.value);

    this.usuarioService.login(usuario, formulario.value.recordarme).subscribe((correcto) => {
      this.router.navigate(['/dashboard']);
    });
  }


}
