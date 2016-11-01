import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarshipComponent } from './starship.component';
import { StarshipService } from './starship.service';
import { StarShipRoutes } from './starship.router';
import { PagerService } from './pager.service';

@NgModule({
  declarations: [StarshipComponent],
  imports: [CommonModule, FormsModule, StarShipRoutes],
  providers: [StarshipService, PagerService]
})
export class StarshipModule { }
