import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  Display(id: number, msg: string) {
    alert("Player N° " + id + " " + msg);
  }
  playersTab: any = [];
  constructor(private router : Router, private pService:PlayerService) { }

  ngOnInit(): void {
    // this.playersTab = JSON.parse(localStorage.getItem("players") || "[]");
    this.pService.getAllPlayers().subscribe(
      (response)=>{console.log("HEre Response Form BE",response);
    this.playersTab=response.T;
      }
    );
  }

  deletPlayer(id: number) {
    this.pService.deletePlayerById(id).subscribe(
       (response) => {
        console.log("Here response After Delete", response)
        this.pService.getAllPlayers().subscribe(
          (data) => {
            console.log("HEre Response Form BE", data);
            this.playersTab = data.T;
          }
        );
      }
    );
  }
goToInfo(id:number){
  this.router.navigate([`playerInfo/${id}`])
}
goToEdit(id: number) {
  this.router.navigate([`editPlayer/${id}`])
}
}
