import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {ActorComponent} from "./actor.component";
import {ActorRoutes} from "./actor.router";
import {ActorService} from "./actor.service";

@NgModule({
  declarations: [ ActorComponent],
  imports: [ CommonModule, FormsModule, ActorRoutes],
  providers: [ ActorService],
  exports: [ ActorComponent]
})

export class ActorModule {

}
