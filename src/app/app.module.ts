import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { StandingsComponent } from './components/standings/standings.component';
import { NewsComponent } from './components/news/news.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { MatchesComponent } from './components/matches/matches.component';

import { AllPlayersComponent } from './components/all-players/all-players.component';
import { StadiumsTableComponent } from './components/stadiums-table/stadiums-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { SearchPlayersComponent } from './components/search-players/search-players.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CupEventComponent,
    ResultComponent,
    StandingsComponent,
    NewsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    HomeComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AdminComponent,
    TeamsTableComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    MatchesComponent,
    AllPlayersComponent,
    StadiumsTableComponent,
    SearchComponent,
    MatchInfoComponent,
    EditMatchComponent,
    EditTeamComponent,
    EditPlayerComponent,
    TeamInfoComponent,
    PlayerInfoComponent,
    SearchPlayersComponent,
    AsterixPipe,
    ReversePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
