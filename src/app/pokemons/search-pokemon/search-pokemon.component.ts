import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pokemon } from 'src/app/pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>=null as any;
  constructor(private router:Router,private pokemonsService:PokemonsService) { }

  
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // on retourne la liste des résultats correpsondant aux termes de la recherche
      // ça annule et rejette les termes de recherches et retourne seulement le plus récent.
      switchMap((term: string) => this.pokemonsService.searchPokemons(term)),
    );
  }
  search(term:string):void {
    this.searchTerms.next(term);
  }
  gotoDetail(pokemon:Pokemon):void{
    const link=['/pokemon',pokemon.id];
    this.router.navigate(link);
  }

}
