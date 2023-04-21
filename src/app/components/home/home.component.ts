import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _GamesService:GamesService){}
  allGames:any[]=[]
  ngOnInit(): void {
    this._GamesService.getSortedGames('popularity').subscribe({
      next:(response)=>{
        console.log(response);
        
        this.allGames=response;
      }
    })
  }
  

}
