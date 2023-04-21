import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  allGames:any[]=[];
  length:number=20;
  displayGame:any[]=this.allGames;
  sorted:any;
  constructor(private _GamesService:GamesService , private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.sorted=params.get('sorted');

      this._GamesService.getSortedGames(this.sorted).subscribe({
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
