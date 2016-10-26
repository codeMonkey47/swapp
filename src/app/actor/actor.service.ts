import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ActorService {

  constructor(private http: Http) { }

  getActor(actorId) : Observable<any>{
    return this.http.get('http://swapi.co/api/people/' + actorId)
      .map(res => res.json());
  }
}
