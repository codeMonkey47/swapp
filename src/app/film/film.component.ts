import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films = [{
    title : 'A New Hope'
  },{
    title: 'The Empire Strikes Back'
  },{
    title: 'Return Of the Jedi'
  }];

  constructor() { }

  ngOnInit() {
  }

}
