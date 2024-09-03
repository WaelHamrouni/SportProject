import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../../services/match.service';
import { response } from 'express';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  match: any = {};
  matchForm!: FormGroup;
  matchId: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router , private mService : MatchService) { }

  ngOnInit(): void {
    this.matchId = this.activatedRoute.snapshot.params['id'];
    this.mService.getMatchById(this.matchId).subscribe(
      (data)=>{
        console.log("here data",data);
        this.match=data.match;
      }
    );
   
  }
  editMatch() {
    this.mService.editMatch(this.match).subscribe(
      (response)=> {
        console.log("Here Response After Edit");
        this.router.navigate(['admin']);
      }
    );
   
  }

}
