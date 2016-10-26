import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing} from './app.route';

import { AppComponent } from './app.component';
import { FilmModule} from './film';
import { ActorModule} from './actor';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent ,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FilmModule,
    ActorModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
