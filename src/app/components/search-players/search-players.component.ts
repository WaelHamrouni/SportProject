import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.css']
})
export class SearchPlayersComponent implements OnInit {
 
  playerForm!: FormGroup;
  searchPlayer: any = [];
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      age:['',[Validators.required]],
    });
  }
  afficheSearch() {
    this.searchPlayer = [];
    let playersTab = JSON.parse(localStorage.getItem("players") || "[]");
    this.searchPlayer = playersTab.filter((elt: any) => elt.age >= this.playerForm.value.age)
  }
}
