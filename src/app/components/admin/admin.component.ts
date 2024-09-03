import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matchesTetele: string=`Matches`
  teamsTetele: string=`Teams`
  playersTetele: string=`Players`
stadiumsTetele: string=`Stadiums`
adminTetele: string=`Admin`
actualDate : Date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
