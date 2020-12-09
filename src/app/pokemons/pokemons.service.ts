import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../shared/list.pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }
  getListPokemons(): Pokemon[]{
    return POKEMONS;
  }
  getSinglePokemon(id: number): Pokemon {
    const listPkm = this.getListPokemons();
    for (let i = 0; i < listPkm.length; i++) {
      if(listPkm[i].id===id){
        return listPkm[i];
      }
    }
    return <any>null;
  }
}
