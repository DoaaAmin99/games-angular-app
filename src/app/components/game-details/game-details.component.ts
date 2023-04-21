import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  gameDetails:any;
  gameId:any;
  backgroundimage:string=''
  constructor(private _GamesService:GamesService , private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      
      this.gameId = params.get('id');
    });

    this._GamesService.getGameDetails(this.gameId).subscribe({
      next:(response)=>{
        console.log(response);
        
        this.gameDetails=response;
        this.backgroundimage=`linear-gradient(rgba(39,43,48,.9),#272b30),url(https://www.freetogame.com/g/${response.id}/background.jpg  )`
      }
      
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: true
  }

}
