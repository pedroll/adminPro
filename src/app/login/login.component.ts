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

  constructor(public  router: Router,
              public usuarioService: UsuarioService) {
  }

  ngOnInit() {


  }

  ingresar(formulario: NgForm) {
    console.log('Ingresando', formulario.value);
    // if (formulario.invalid) { return; }

    const usuario = new Usuario(null, formulario.value.email, formulario.value.password);
    this.usuarioService.login(usuario).subscribe(resp => console.log(resp));
    // this.router.navigate(['/dashboard']);
  }


}
