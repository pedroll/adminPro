import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UsuarioService} from '../services/usuario/usuario.service';
import {Usuario} from '../models/usuario.model';

declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame = false;

  // google
  private auth2: any;


  constructor(public router: Router,
              public usuarioService: UsuarioService,
              private ngZone: NgZone) {

  }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 0) {
      this.recuerdame = true;
    }

    this.googleInit();
  }

  ////////////////////////////////////////////////////////
  //////////  Inicio google signin             ///////////
  ////////////////////////////////////////////////////////


  googleInit() {

    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init(
        {

          client_id: '249811811533-7e0bsj6rje02oavvjl2egeique3e9k2b.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'


        });
      this.attachSignin(document.getElementById('btnGoogle'));
    });

  }

  attachSignin(element) {

    let tokenGoogle: string;

    this.auth2.attachClickHandler(element, {}, (gooleUser) => {
      // const profile = gooleUser.getBasicProfile();
      tokenGoogle = gooleUser.getAuthResponse().id_token;

      console.log('tokenGoogle', tokenGoogle);

      this.usuarioService.loginGoogle(tokenGoogle).subscribe((correcto) => {
        // fix navigate outside zone
        console.log('respuesta servidor backend login google');
        this.ngZone.run(() => this.router.navigate(['/dashboard'])).then();
        // this.router.navigate(['/dashboard']);
      });

    });


  }

  ////////////////////////////////////////////////////////
  //////////  Final google signin             ///////////
  ////////////////////////////////////////////////////////

  ingresar(formulario: NgForm) {
    console.log('Ingresando', formulario.value);
    // if (formulario.invalid) { return; }

    const usuario = new Usuario(null, formulario.value.email, formulario.value.password);
    console.log('Ingresando', formulario.value);

    this.usuarioService.login(usuario, formulario.value.recordarme).subscribe((correcto) => {
      // fix navigate outside zone
      this.ngZone.run(() => this.router.navigate(['/dashboard'])).then();
      // this.router.navigate(['/dashboard']);
    });
  }


}
