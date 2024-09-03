import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  // title : attribut
  title: string = 'All Matches';
  nbr: number = 10;
  matchesTab:any=[];
  constructor() {}

  ngOnInit(): void {
    this.matchesTab = JSON.parse(localStorage.getItem("matches")||"[]");
  }
  calcul(a:number,b:number){
    return a+b;
  }
}
