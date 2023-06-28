import { Pokemon } from "./pokemon";

export class Player {
    playerName:string;
    pokemonArray: Array<Pokemon>=[];

    constructor(playerName:string){
        this.playerName = playerName
    }
}