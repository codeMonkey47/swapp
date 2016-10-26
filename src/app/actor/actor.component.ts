import { Component, OnInit } from '@angular/core';

import { ActorService } from './actor.service'

@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actor:any= {
    name:'',
    mass:'',
    height:''
  };
  actors: Object[] = [{
      name: 'Luke SkyWalker',
      id: 1
    }, {
      name: 'C-3PO',
      id: 2
  },{
      name: 'R2-D2',
      id: 3
  }, {
      name: 'Darth Vader',
      id : 4
  }];

  constructor(private actorService: ActorService) { }

  ngOnInit() {
      this.fetchActorInfo(1);
  };

  fetchActorInfo(actorId) : void {
    this.actorService.getActor(actorId).subscribe(
      (response) => {
        this.actor = response;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  selectedActor(actorId): void {
    this.fetchActorInfo(actorId);
  };


}
