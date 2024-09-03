import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  obj: any = {};
  matchForm!: FormGroup;
  searchMatch: any = [];

  constructor(private formBilder: FormBuilder, private mService: MatchService) { }

  ngOnInit(): void {
    this.matchForm = this.formBilder.group({
      one: ['', [Validators.required]],
      two: ['', [Validators.required]],
    });

  }

  
  afficheSearch() {
    this.mService.getSearcMatches(this.obj).subscribe(
      (response)=>{
        console.log("search",response.match)
        this.searchMatch=response.match;
      }
    );
    // this.searchMatch = [];
    // this.mService.getAllMatches().subscribe(
    //   (response) => {
    //     console.log("HEre Response Form BE", response);
    //    let matchesTab = response.T;
    //     this.searchMatch = matchesTab
    //   }
    // );
    // for (let i = 0; i < matchesTab.length; i++) {
    //   if (matchesTab[i].scoreOne == this.obj.one && matchesTab[i].scoreTwo == this.obj.two) {
    //    this.searchMatch.push(matchesTab[i]);

    //   }
    // }

  }
  

}
