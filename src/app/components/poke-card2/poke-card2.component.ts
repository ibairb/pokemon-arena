import { Component, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-card2',
  templateUrl: './poke-card2.component.html',
  styleUrls: ['./poke-card2.component.css']
})
export class PokeCard2Component implements OnInit, OnChanges {
  @Input() pokemon: Pokemon;
  class:string;
  type: string;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.changeCardClass();
  }

  changeCardClass() {
    const card = document.getElementById('background2')
    const image = document.getElementById('image2')
    const pokemonType = this.pokemon.type
    this.renderer.setAttribute(card, 'class', `background ${pokemonType}2`);
    this.renderer.setAttribute(image, 'class', `image ${pokemonType}Img2`);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && !changes['pokemon'].firstChange) {
      this.changeCardClass();
    }
  }
}
