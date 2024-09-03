import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {
  players:any=[
   ];
   
  constructor() { }

  ngOnInit(): void {
   this.players= JSON.parse(localStorage.getItem("players")||"[]");
  }

}
