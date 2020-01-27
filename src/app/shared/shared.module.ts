import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HeaderComponent} from "./header/header.component";
import {PagenofoundComponent} from "./pagenofound/pagenofound.component";



@NgModule({
  declarations: [
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
    PagenofoundComponent,

  ],
  exports: [
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
    PagenofoundComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
