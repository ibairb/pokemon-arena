import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Pokemon } from 'src/app/models/pokemon';
import { ChoosePokemonService } from 'src/app/services/choose-pokemon.service';

@Component({
  selector: 'app-choose-pokemon2',
  templateUrl: './choose-pokemon2.component.html',
  styleUrls: ['./choose-pokemon2.component.css']
})
export class ChoosePokemon2Component {
  @Input() pokemon: Pokemon;
  @Input() player2: Player;

  constructor(private choosePokemonService: ChoosePokemonService) {}

  chosePokemon(pokemon: Pokemon, player: Player) {
    this.choosePokemonService.choosePokemon(pokemon, player);
  }
}
