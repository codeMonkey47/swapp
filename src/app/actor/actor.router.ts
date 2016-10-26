import { Routes, RouterModule } from '@angular/router';

import {ActorComponent} from "./actor.component";

const actorRoutes: Routes = [
  {path: 'actors', component: ActorComponent}
];

export const ActorRoutes = RouterModule.forChild(actorRoutes);
