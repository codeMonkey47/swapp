import { Component, OnInit } from '@angular/core';

import { PagerService } from './pager.service'
import { StarshipService } from './starship.service'

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starShips: any;
  totalShips: any = 1;
  pager: any = {};

  constructor(private pagerService: PagerService, private starShipService: StarshipService) { }

  ngOnInit() {
    this.starShipService.getAllStarShips()
      .subscribe(
        (res) => {
          this.starShips = res.results;
          this.totalShips = res.count;
        }
      );
    this.setPage(this.totalShips);
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.totalShips);
  }

}
