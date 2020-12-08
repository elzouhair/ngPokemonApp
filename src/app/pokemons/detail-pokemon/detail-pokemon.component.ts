import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { POKEMONS } from 'src/app/shared/list.pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  listOfPokemons: Pokemon[] = POKEMONS;
  pokemonToDisplay: Pokemon = null;
  constructor(private route:ActivatedRoute,private router:Router) { 
  }
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    for (let i = 0; i < this.listOfPokemons.length; i++) {
      if(this.listOfPokemons[i].id === id){
        this.pokemonToDisplay=this.listOfPokemons[i];
        break;
      }
    }
    console.log(this.pokemonToDisplay);
  }

  retour():void{
    this.router.navigate(['/pokemon']);
  }

}
