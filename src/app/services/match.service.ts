import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // Addresse de destination 

matchUrl:string="http://localhost:3000/matches";
// matchUrlS:string="http://localhost:3000/matches/search"
  constructor(private httpClient : HttpClient) { }



// Request to Get All Matches
//  Response : Array of Obi
getAllMatches(){
return  this.httpClient.get<{T:any}>(this.matchUrl);
}
getMatchById(id:any) {
  // return this.httpClient.get(this.matchUrl+"/"+ id);
  return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`);
}
deleteMatchById (id : any) {
  return this.httpClient.delete<{isDeleted:boolean}>(`${this.matchUrl}/${id}`);

}
addMatch (matchObj:any){
  return this.httpClient.post<{isAdded:boolean}>(this.matchUrl,matchObj);
}
editMatch(newMatch:any){
  return this.httpClient.put<{msg:any}>(this.matchUrl,newMatch);
}
getSearcMatches(matchS:any){
  return  this.httpClient.post<{match:any}>("http://localhost:3000/matches/search",matchS);
  }


}
