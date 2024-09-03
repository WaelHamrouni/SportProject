import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  path!: string;
  erroMsg!: any;
  photo: any;
  constructor(private formBuilder: FormBuilder, private uService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confPwd: [''],
      tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });
  }
  signup() {
    let data;
    if (this.path == "/signupAdmin") {
      this.signupForm.value.role = 'admin';
    } else {
      this.signupForm.value.role = 'client';
    }
    console.log("here user obj", this.signupForm.value);
    this.uService.signup(this.signupForm.value, this.photo).subscribe(
      (data) => {
        console.log("Here after signup html", data);
        if (data.isAdded) {
          this.router.navigate(['signin']);
        } else {
          this.erroMsg = data.msg;
        }
      }
    );
  }
  selectFile(event: any) {
    // const file = (event.target as HTMLInputElement).files[0];
    const inputElement = event.target as HTMLInputElement;
    
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.photo = inputElement.files[0];
      console.log("File", this.photo);

    }

  }
}
