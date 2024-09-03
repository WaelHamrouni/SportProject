import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, 
    private router : Router, private pService: PlayerService) { }
  player: any = {};
 
  playerId: any;


  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.params['id'];
    this.pService.getPlayerById(this.playerId).subscribe(
      (data)=>{
        console.log("here data",data);
        this.player=data.player;
      }
      

    );
  }

}
