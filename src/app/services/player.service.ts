import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // Addresse de destination 

  playerUrl:string="http://localhost:3000/players"
  constructor(private httpClient:HttpClient) { }
  // Request to Get All Matches
//  Response : Array of Obi
getAllPlayers(){
  return  this.httpClient.get<{T:any}>(this.playerUrl);
  }
  getPlayerById(id:any) {
    // return this.httpClient.get(this.matchUrl+"/"+ id);
    return this.httpClient.get<{player:any}>(`${this.playerUrl}/${id}`);
  }
  deletePlayerById (id : any) {
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.playerUrl}/${id}`);
  
  }
  addPlayer (playerObj:any){
    return this.httpClient.post<{isAdded:boolean}>(this.playerUrl,playerObj);
  }
  editPlayer(newPlayer:any){
    return this.httpClient.put<{msg:any}>(this.playerUrl,newPlayer);
  }
}
