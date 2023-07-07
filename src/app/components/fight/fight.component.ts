import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css'],
})
export class FightComponent implements OnInit, AfterViewInit {
  player: Player;
  player2: Player;
  movesPlayer: any;
  movesPower: any;
  turn: number;
  pokemonSelected: boolean;
  pokemon2Selected: boolean;
  playerPokemonSelected: Pokemon;
  player2PokemonSelected: Pokemon;
  pokemon2Hp: number;
  actualPokemon2Hp: number;
  pokemonHp: number;
  actualPokemonHp: number;

  constructor(
    private playerService: PlayerService,
    private pokemonService: PokemonService
  ) {
    this.pokemonSelected = false;
    this.pokemon2Selected = false;
  }

  ngOnInit(): void {
    this.player = this.playerService.player;
    this.player2 = this.playerService.player2;
    this.turn = 0;
  }

  ngAfterViewInit(): void {
    this.getMovesPower(this.player);
    this.getMovesPower(this.player2);
  }

  // obtenemos los movimients de cada pokemon
  getMovesPower(player: Player): void {
    const observables: Observable<any[]>[] = [];

    player.pokemonArray.forEach((pokemon) => {
      const movesObservables = pokemon.moveUrls.map((moveUrl) =>
        this.pokemonService.getMovePower(moveUrl)
      );

      const pokemonObservable = forkJoin(movesObservables).pipe(
        map((powers: any[]) => powers.map((power) => power.power))
      );

      observables.push(pokemonObservable);
    });

    forkJoin(observables).subscribe((powers: any[][]) => {
      powers.forEach((pokemonPowers, index) => {
        player.pokemonArray[index].power = pokemonPowers;
      });
    });
  }

  // aquí elegimos el pokémon con el que vamos a luchar

  selectPokemonClick(event: any, player: Player): void {
    if (player == this.player) {
      player.pokemonArray.forEach((element) => {
        if (event.target.innerHTML == element.name) {
          this.playerPokemonSelected = element;
          this.pokemonSelected = true;
          this.pokemonHp = this.playerPokemonSelected.stats[0].base_stat * 4;
          this.actualPokemonHp =
            this.playerPokemonSelected.stats[0].base_stat * 4;
        }
      });
    } else {
      player.pokemonArray.forEach((element) => {
        if (event.target.innerHTML == element.name) {
          this.player2PokemonSelected = element;
          this.pokemon2Selected = true;
          this.pokemon2Hp = this.player2PokemonSelected.stats[0].base_stat * 4;
          this.actualPokemon2Hp =
            this.player2PokemonSelected.stats[0].base_stat * 4;
        }
      });
    }
  }

  // algoritmo para los ataques

  handleAttack(event: any, player: Player): void {
    const index = this.playerPokemonSelected.moveName.indexOf(
      event.target.innerHTML
    );

    const index2 = this.player2PokemonSelected.moveName.indexOf(
      event.target.innerHTML
    );
 
    if (player === this.player) {
      const power = this.playerPokemonSelected.power[index];
      this.actualPokemon2Hp = this.actualPokemon2Hp - power * 0.35;
      if (this.actualPokemon2Hp < 0) {
        this.actualPokemon2Hp = 0;
      }
      this.turn = this.turn + 1;
    } else {
      const power = this.player2PokemonSelected.power[index2];
      this.actualPokemonHp = this.actualPokemonHp - power * 0.35;
      if (this.actualPokemonHp < 0) {
        this.actualPokemonHp = 0;
      }
      this.turn = this.turn + 1;
    }
  }
}
