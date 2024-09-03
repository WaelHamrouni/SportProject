import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SignupComponent } from './components/signup/signup.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { SearchComponent } from './components/search/search.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchPlayersComponent } from './components/search-players/search-players.component';

const routes: Routes = [
  // http://localhost:4200/ =>
  //HomeComponent will be displayed
  { path: '', component: HomeComponent },
  // http://localhost:4200/signin =>
  //LoginComponent will be displayed
  { path: 'signin', component: LoginComponent },
  // http://localhost:4200/inscription =>
  //SignupComponent will be displayed
  { path: 'inscription', component: SignupComponent },
  { path: 'signupAdmin', component: SignupComponent },
  { path: 'addMatch', component: AddMatchComponent},
  { path: 'addPlayer', component: AddPlayerComponent},
  { path: 'addTeam', component: AddTeamComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'matches', component: MatchesComponent},
  { path: 'players', component: AllPlayersComponent},
  { path: 'search', component: SearchComponent},
  { path: 'searchPlayers', component: SearchPlayersComponent},
  // matchInfo/:id =>path paramétre 
  // matchInfo/:1 ou matchInfo/:5 ou matchInfo/:...== matchInfo/:parametr
  { path: 'matchInfo/:id', component: MatchInfoComponent },
  { path: 'editMatch/:id', component: EditMatchComponent },
  { path: 'playerInfo/:id', component: PlayerInfoComponent },
  { path: 'editPlayer/:id', component: EditPlayerComponent },
  { path: 'teamInfo/:id', component: TeamInfoComponent },
  { path: 'editTeam/:id', component: EditTeamComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
