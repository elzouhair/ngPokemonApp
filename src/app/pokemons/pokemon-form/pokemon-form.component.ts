import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  types: Array<string> = [];
  @Input()
  pokemon: Pokemon = new Pokemon;
  
  constructor(private router:Router,private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
    this.types=this.pokemonsService.getPokemonTypes();
  }

  hasType(type: string):boolean{
    const index = this.pokemon.types!.indexOf(type);
    return (index > -1) ? true : false;
  }
  selectType($event: any,type:string): void{
    const checked = $event.target.checked;
    if(checked){
      this.pokemon.types?.push(type);
    }else{
      const index = this.pokemon.types!.indexOf(type);
      if(index > -1){
        this.pokemon.types?.splice(index,1);
      }
    }
  }
  onSubmit():void{
    console.log('Submit form !');
    
    this.pokemonsService.updatePokemon(this.pokemon).
    subscribe(() => this.goBack());
  }
  goBack():void{
    this.router.navigate(['/pokemon',this.pokemon.id]);
  }
  isTypeValid(type:string):boolean{
    if(this.pokemon.types?.length===1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types?.length===3 && !this.hasType(type)){
      return false;
    }
    return true;
  }
  
}
