import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.route';

import { AppComponent } from './app.component';
import { FilmModule } from './film';
import { ActorComponent, ActorService } from './actor';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FilmModule,
    routing
  ],
  providers: [ ActorService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
