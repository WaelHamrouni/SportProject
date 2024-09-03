import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
 // Addresse de destination 

 teamUrl:string="http://localhost:3000/teams"
  constructor(private httpClient:HttpClient) { }
    // Request to Get All Teams
//  Response : Array of Obi
getAllTeams(){
  return  this.httpClient.get<{T:any}>(this.teamUrl);
  }
  getTeamById(id:any) {
    // return this.httpClient.get(this.matchUrl+"/"+ id);
    return this.httpClient.get<{team:any}>(`${this.teamUrl}/${id}`);
  }
  deleteTeamById (id : any) {
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.teamUrl}/${id}`);
  
  }
  addTeam (teamOb:any){
    return this.httpClient.post<{isAdded:boolean}>(this.teamUrl,teamOb);
  }
  editTeam(newTeam:any){
    return this.httpClient.put<{msg:any}>(this.teamUrl,newTeam);
  }
}
