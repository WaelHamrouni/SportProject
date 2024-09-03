import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogTab:any=[
    {id:1,title:"wael",description:1,date:"EST"},
    {id:2,title:"riadh",description:1,date:"EST"},
    {id:3,title:"abir",description:1,date:"EST"},
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
