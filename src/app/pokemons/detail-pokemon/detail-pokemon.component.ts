import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { POKEMONS } from 'src/app/shared/list.pokemons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  listOfPokemons: Pokemon[] = POKEMONS;
  pokemonToDisplay: Pokemon = null as any;
  constructor(private route:ActivatedRoute,private router:Router,private pokemonsService:PokemonsService) { 
  }
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.pokemonsService.getSinglePokemon(id).
    subscribe(pkm => this.pokemonToDisplay=pkm);
    console.log(this.pokemonToDisplay);
  }

  retour():void{
    this.router.navigate(['/pokemon']);
  }
  editerPokemon(pokemonToEdit: Pokemon):void{
    const link=['pokemon/edit',pokemonToEdit.id];
    this.router.navigate(link);
  }
  deletePokemon(pokemonToDelete: Pokemon):void{
    this.pokemonsService.deletePokemon(pokemonToDelete).
    subscribe(()=> this.retour());
  }

}
