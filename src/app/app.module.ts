import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { ChoosePokemonComponent } from './components/choose-pokemon/choose-pokemon.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { HomeComponent } from './components/home/home.component';
import { PokeCard2Component } from './components/poke-card2/poke-card2.component';
import { ChoosePokemon2Component } from './components/choose-pokemon2/choose-pokemon2.component';
import { FightComponent } from './components/fight/fight.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    PokeCardComponent,
    ChoosePokemonComponent,
    CreatePlayerComponent,
    HomeComponent,
    PokeCard2Component,
    ChoosePokemon2Component,
    FightComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
