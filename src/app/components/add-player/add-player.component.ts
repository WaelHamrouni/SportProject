import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  playerForm!: FormGroup;
  teams: any=[];
  constructor(private pService: PlayerService,
     private router: Router,
    private tService : TeamService) { }

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe(
      (response) =>{
        this.teams=response.T;
      }
    )
  }
  addPlayer() {
    // console.log('Add Player BTN ', this.player);
    // let players = JSON.parse(localStorage.getItem("players")||"[]");
    // this.player.id =this.generateId(players);
    // players.push(this.player);
    // localStorage.setItem("players",JSON.stringify(players));
    console.log('add Match BTN clicked', this.player);
    this.pService.addPlayer(this.player).subscribe(
      (response) => {
        console.log("Here Response Form Add Match", response);
        this.router.navigate(['/admin']);
      }
    );
  }

  // generateId(T: any) {
  //   let max;

  //   if (T.length == 0) {
  //     max = 0;
  //   }
  //   else {
  //     max = T[0].id
  //     for (let i = 1; i < T.length; i++) {
  //       if (T[i].id > max) {
  //         max = T[i].id
  //       }

  //     }

  //   }
  //   return max + 1;
  // }
}
