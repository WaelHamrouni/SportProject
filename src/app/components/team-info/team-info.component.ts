import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  constructor(private activatedRoute :ActivatedRoute, 
    private router: Router, private tService :TeamService
  ) { }
  team: any = {};
 
  teamId: any; 

  ngOnInit(): void {
    this.teamId = this.activatedRoute.snapshot.params['id'];
    this.tService.getTeamById(this.teamId).subscribe(
      (data)=>{
        console.log("here data",data);
        this.team=data.team;
      }
      

    );
  }

}
