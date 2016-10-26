import { Component, OnInit } from '@angular/core';

import { FilmService } from './film.service';
import {Observable} from "rxjs";

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit{

  films: Observable<any[]>;

  constructor(private filmService: FilmService) { }

  ngOnInit(){
    this.films = this.filmService.getFilms();
  };

}
