import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Pokemon } from 'src/app/models/pokemon';
import { ChoosePokemonService } from 'src/app/services/choose-pokemon.service';

@Component({
  selector: 'app-choose-pokemon',
  templateUrl: './choose-pokemon.component.html',
  styleUrls: ['./choose-pokemon.component.css'],
})
export class ChoosePokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() player: Player;
  @Input() player2: Player;

  constructor(private choosePokemonService: ChoosePokemonService) {}
  ngOnInit(): void {
    
  }

  chosePokemon(pokemon: Pokemon, player: Player) {
    
    this.choosePokemonService.choosePokemon(pokemon, player);
    
  }
}
