import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from '../../services/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any = {};
  matchForm!: FormGroup;

  constructor(private mService: MatchService ,private router: Router) { }

  ngOnInit(): void {
  }

  addMatch() {
    console.log('add Match BTN clicked', this.match);
    this.mService.addMatch(this.match).subscribe(
      (response) => {
        console.log("Here Response Form Add Match", response);
this.router.navigate(['/admin']);
      }
    );
  }



}
