/*
dependencies: 
bootstrap
popper.js
jquery

*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [PaginationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
