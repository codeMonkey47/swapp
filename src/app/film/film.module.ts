import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilmComponent } from './film.component';
import { FilmService } from "./film.service";
import {FilmRoutes} from "./film.router";
import {FilmDetailComponent} from "./film.detail.component";

@NgModule({
  declarations: [ FilmComponent, FilmDetailComponent],
  imports: [ CommonModule, FormsModule, FilmRoutes],
  providers: [ FilmService]
})

export class FilmModule {

}
