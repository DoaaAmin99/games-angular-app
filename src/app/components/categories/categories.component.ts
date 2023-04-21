import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  allGames:any[]=[];
  length:number=20;
  displayGame:any[]=this.allGames;
  category:any;
  constructor(private _GamesService:GamesService , private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.category=params.get('category');

      this._GamesService.getGamesByCategory(this.category).subscribe({
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
