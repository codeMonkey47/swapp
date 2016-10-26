import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmModule } from './film';
import { ActorComponent, ActorService } from './actor';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FilmModule
  ],
  providers: [ ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
