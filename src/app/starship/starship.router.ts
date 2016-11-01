import { Routes, RouterModule } from '@angular/router';

import { StarshipComponent } from './starship.component';

const starShipRoutes: Routes = [
  { path : 'starShips', component: StarshipComponent}
];

export const StarShipRoutes = RouterModule.forChild(starShipRoutes);
