import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POKEAPI } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url:string

  constructor(private http: HttpClient) {
    this.url = POKEAPI.URL;
   }

   getPokemon(pokemon:string):Observable<any>{
    return this.http.get(this.url + pokemon)
   }
}
