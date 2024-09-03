import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user!:any;
  constructor(private router:Router) { }

  ngOnInit(): void {


  }
  isLoggedIn(){
    let token:any=sessionStorage.getItem("token");
    if (token) {
      this.user=jwtDecode(token);
      console.log("here",this.user);
      
    }
    return !!token;
  }
logOut(){
  sessionStorage.removeItem("token");
  this.router.navigate(['/']);
}
}
