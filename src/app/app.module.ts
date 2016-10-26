import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FilmService } from './film/film.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
