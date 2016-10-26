import { Component, OnInit } from '@angular/core';

import { FilmService } from './film.service';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit{

  selectedFilm : any = [];
  films: any[];
  subscription: any;

  constructor(private filmService: FilmService) { }

  ngOnInit(){
    this.subscription = this.filmService.getFilms().subscribe(
      (response) => {
        this.films = response;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  cancelSearch(): void{
    this.subscription.unsubscribe();
  };

  showDetails(film) : void{
    this.selectedFilm = film;
  };

}
