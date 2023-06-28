import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class ChoosePokemonService {

  constructor() {}

  choosePokemon(pokemon: Pokemon, player: Player) {
    player.pokemonArray.push(pokemon)
  }
    
}
