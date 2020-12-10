import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {
  singlePokemon:Pokemon = null as any;
  constructor(private activatedRoute:ActivatedRoute,private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
    const index= +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.singlePokemon=this.pokemonsService.getSinglePokemon(index);
  }

}
