import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap,catchError  } from 'rxjs/operators';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
private pokemonUrl = 'api/pokemons';
private handleError<T>(operation='operation',result?: T){
  return (error: any): Observable<T> =>{
    console.log(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  }
}
  constructor(private http:HttpClient) { }
  getListPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(_=>console.log('Fetched Pokemon')),
      catchError(this.handleError('getListPokemons',[]))
    );
  }

  getSinglePokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    
    return this.http.get<Pokemon>(url).pipe(
      tap( _ => console.log(`Fetched Pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`Get pokemon id=${id}`))
    );
  }
  getPokemonTypes(): string[]{
    return ['Feu','Eau','Plante','Insecte','Normal','Vol','Poison','Fée','Psy','Electrik','Combat','grey'];
  }
  updatePokemon(pokemon:Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({'content-type':'application/json'})
    };
    return this.http.put(this.pokemonUrl,pokemon,httpOptions).pipe(
      tap(_ => console.log(`Updated Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updated Pokemon'))
    );
  }
  deletePokemon(pokemon:Pokemon):Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({'content-type':'application/json'})
    };
    const url=`${this.pokemonUrl}/${pokemon.id}`
    console.log(url);
    return this.http.delete(url,httpOptions).pipe(
      tap(_ => console.log(`Deleted Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('deleted Pokemon'))
    );
  }
  searchPokemons(term: string): Observable<Pokemon[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(
      tap(_ => console.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons',[]))
    );
  }
}
