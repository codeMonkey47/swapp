import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilmComponent } from './film.component';
import { FilmService } from "./film.service";

@NgModule({
  declarations: [ FilmComponent],
  imports: [ CommonModule, FormsModule],
  providers: [ FilmService],
  exports: [ FilmComponent]
})

export class FilmModule {

}
