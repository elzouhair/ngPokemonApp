import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[]=[];
  constructor(private router:Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.getListPokemons().
    subscribe(listPkm => this.pokemons=listPkm);
  }

  selectPokemon(pokemon:Pokemon):void {
    alert('vous avez selectionne: '+pokemon.name);
    const link=['/pokemon',pokemon.id];
    this.router.navigate(link);
  }
}
