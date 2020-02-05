import {Component, OnInit} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private  router: Router,
              private title: Title,
              private meta: Meta) {

    this.getDataroute().subscribe(data => {
      // console.log(data.descripcion);
      // console.log(data);
      this.title.setTitle(data.titulo);
      const metaTag: MetaDefinition = {
        name: 'Description',
        content: data.descripcion
      };
      meta.updateTag(metaTag);
      // meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1'});
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
