import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../../services/match.service';
import { response } from 'express';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  Display(id: number, msg: string) {
    alert("Match N° " + id + " " + msg);
  }

  matchesTab: any = [];
  constructor(private router: Router, private mService: MatchService) { }

  ngOnInit(): void {
    // this.matchesTab = JSON.parse(localStorage.getItem("matches") || "[]");
    this.mService.getAllMatches().subscribe(
      (response) => {
        console.log("HEre Response Form BE", response);
        this.matchesTab = response.T;
      }
    );
  }
  scoreColor(s1: number, s2: number) {
    let color: string;
    if (s1 > s2) {
      color = 'green'
    } else if (s1 < s2) {
      color = 'red'
    }
    else {
      color = 'blue'
    }
    return color;
  }
  scoreResult(s1: number, s2: number) {
    let color: string;
    if (s1 > s2) {
      color = 'Win'
    } else if (s1 < s2) {
      color = 'Loss'
    }
    else {
      color = 'Draw'
    }
    return color;
  }
  scoreColorDraw(s1: number, s2: number) {
    let color: string;
    if (s1 > s2) {
      color = 'gray'
    } else if (s1 < s2) {
      color = 'gray'
    }
    else {
      color = 'blue'
    }
    return color;
  }
  deletMatch(id: number) {
    this.mService.deleteMatchById(id).subscribe(
      (response) => {
        console.log("Here response After Delete", response)
        this.mService.getAllMatches().subscribe(
          (data) => {
            console.log("HEre Response Form BE", data);
            this.matchesTab = data.T;
          }
        );
      }
    );

  }
  goToInfo(id: number) {

    this.router.navigate([`matchInfo/${id}`])
  }
  goToEdit(id: number) {
    this.router.navigate([`editMatch/${id}`])
  }
}



