import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Player } from 'src/app/models/player';
import { Pokemon } from 'src/app/models/pokemon';
import { NumeroJugadoresService } from 'src/app/services/numero-jugadores.service';
import { PlayerService } from 'src/app/services/player.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  pokemonName: string;
  pokemonName2: string;
  player: Player;
  player2: Player;
  pokemon: Pokemon;
  pokemon2: Pokemon;
  numeroJugadores: any;

  constructor(
    private pokemonService: PokemonService,
    private numeroJugadoresService: NumeroJugadoresService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.numeroJugadores = this.numeroJugadoresService.numeroJugadores;
    this.player = this.playerService.player
    this.player2 = this.playerService.player2
  }

  handleSubmit(player: string): void {
    this.getPokemon(player);
  }

  getPokemon(player: string): void {
    let pokemonName: string;
    if (player === 'player1') {
      pokemonName = this.pokemonName;
    } else {
      pokemonName = this.pokemonName2;
    }

    this.getPokemonData(pokemonName).subscribe({
      next: (res) => {
        if (player === 'player1') {
          this.pokemon = res;
        } else {
          this.pokemon2 = res;
        }
      },
      error: (err) => {},
      complete: () => {},
    })
  }

  getPokemonData(name: string): Observable<any> {
    return this.pokemonService.getPokemon(name).pipe(
      map((res: any) => ({
        name: res.name,
        type: res.types[0].type.name,
        stats: res.stats.slice(0, 6),
        spriteUrl: res.sprites.front_default,
      }))
    );
  }
}
