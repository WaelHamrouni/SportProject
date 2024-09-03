import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadiums-table',
  templateUrl: './stadiums-table.component.html',
  styleUrls: ['./stadiums-table.component.css']
})
export class StadiumsTableComponent implements OnInit {
  stadiumsTab:any=[
    {id:1,name:"Messi",capacity:"ATK",country:6258,nbr:1},
    {id:1,name:"Rades",capacity:"DIF",country:6258,nbr:121},
    {id:1,name:"DooneS",capacity:"MIlE",country:6258,nbr:191},
 
   
   
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
