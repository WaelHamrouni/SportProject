import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any = {};
  errorMsg!: string;
  constructor(private uService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log("Here Obj ", this.user);
    this.uService.login(this.user).subscribe(
      (data) => {
        console.log("here Data after login", data.msg);
        console.log("here Data after login", data.user);
        if (data.user) {
          let decoded:any=jwtDecode(data.user);
          sessionStorage.setItem("token",data.user);
          if (decoded.role == 'admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          this.errorMsg = "Plaese Check Email/pwd"
        }
      }
    )

  }
}
