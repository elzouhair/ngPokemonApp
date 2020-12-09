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
    this.pokemonToDisplay=this.pokemonsService.getSinglePokemon(id);
    console.log(this.pokemonToDisplay);
  }

  retour():void{
    this.router.navigate(['/pokemon']);
  }

}
