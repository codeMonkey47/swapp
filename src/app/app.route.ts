import { Routes, RouterModule } from '@angular/router';

import {FilmComponent} from "./film/film.component";
import {ActorComponent} from "./actor/actor.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '/films', component: FilmComponent},
  {path: './actors', component: ActorComponent}
];

export const appRoutingProviders: any[]=[];

export const routing = RouterModule.forRoot(appRoutes);
