import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation:ViewEncapsulation.None //Use only when you want to turn of encapsulation. This will propogate the top level li class component to children.
})
export class AppComponent implements OnInit{
  title:string = 'Star Wars Trivia';


  ngOnInit(){
    //get initial data.
  }
}
