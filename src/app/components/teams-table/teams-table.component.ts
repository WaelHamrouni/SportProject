import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  Display(id: number, msg: string) {
    alert("Match N° " + id + " " + msg);
  }
  teamsTab: any = [];

  constructor(private router: Router, private tService: TeamService) { }

  ngOnInit(): void {
    // this.teamsTab = JSON.parse(localStorage.getItem("teams") || "[]");
    this.tService.getAllTeams().subscribe(
      (response) => {
        console.log("HEre Response Form BE", response);
        this.teamsTab = response.T;
      }
    );

  }
  deletPlayer(id: number) {
    this.tService.deleteTeamById(id).subscribe(
      (response) => {
        console.log("Here response After Delete", response)
        this.tService.getAllTeams().subscribe(
          (data) => {
            console.log("HEre Response Form BE", data);
            this.teamsTab = data.T;
          }
        );
      }
    );
  }

  goToInfo(id: number) {
    this.router.navigate([`teamInfo/${id}`])
  }
  goToEdit(id: number) {
    this.router.navigate([`editTeam/${id}`])
  }
}
