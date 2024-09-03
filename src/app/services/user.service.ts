import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Addresse de destination 

  userUrl: string = "http://localhost:3000/users"
  constructor(private httpClient: HttpClient) { }


  signup(user: any,photo:File) {
    let fData=new FormData();
    fData.append("firstName",user.firstName);
    fData.append("lastName",user.lastName);
    fData.append("email",user.email);
    fData.append("pwd",user.pwd);
    fData.append("tel",user.tel);
    fData.append("role",user.role);
    fData.append("img",photo);
    return this.httpClient.post<{isAdded: string ,msg:boolean}>(this.userUrl+"/signup", fData);
  }
  login(user: any) {
    return this.httpClient.post<{msg: string,user:any }>(this.userUrl+"/login", user);
  }
} 
