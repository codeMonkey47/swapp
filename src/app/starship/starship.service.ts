import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StarshipService {

  constructor(private http: Http) { }

  getAllStarShips() : Observable<any> {
      return this.http.get('http://swapi.co/api/starships')
        .map( res => res.json());
  }

  getNextPageResults(pageNumber: number) {
    return this.http.get('http://swapi.co/api/starShips/?page='+pageNumber)
      .map( res => res.json());
  }

}
