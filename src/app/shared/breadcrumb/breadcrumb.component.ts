import {Component, OnInit} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {RxjsComponent} from '../../pages/rxjs/rxjs.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  titulo: string;

  constructor(private  router: Router) {

    this.getDataroute().subscribe(data => {
      console.log(data);
      this.titulo = data.titulo;
    });
  }

  ngOnInit() {
  }

  getDataroute() {
    return this.router.events.pipe(
      // las condiciones para poder filtar el evento del preadcrum que tiene la data de router
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
}
