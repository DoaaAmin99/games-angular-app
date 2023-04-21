import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  allGames:any[]=[];
  length:number=20;
  displayGame:any[]=this.allGames;
  constructor(private _GamesService:GamesService){}
  ngOnInit(): void {
    this._GamesService.getAllGames().subscribe({
      next:(response)=>{
        this.allGames=response;
        this.displayGame=this.allGames.slice(0,20)
      }
    })
  }
  showMore(){
    this.length+=10;
    this.displayGame=this.allGames.slice(0,this.length)
  }

}
