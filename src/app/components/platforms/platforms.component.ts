import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';



@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
  allGames:any[]=[];
  length:number=20;
  displayGame:any[]=this.allGames;
  platform:any;
  constructor(private _GamesService:GamesService , private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.platform=params.get('platform');

      this._GamesService.getGamesByPlatform(this.platform).subscribe({
        next:(response)=>{
          this.allGames=response;
          this.displayGame=this.allGames.slice(0,this.length)
        }
      })
      
    });
  }

  showMore(){
    this.length+=10;
    this.displayGame=this.allGames.slice(0,this.length)
  }

}
