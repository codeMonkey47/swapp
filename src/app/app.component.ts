import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string = 'app works!';
  films = [{
    title : 'A New Hope'
  },{
    title: 'The Empire Strikes Back'
  },{
    title: 'Return Of the Jedi'
  }];

  ngOnInit(){
    //get initial data.
  }
}
