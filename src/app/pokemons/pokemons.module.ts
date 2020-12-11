import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    PokemonEditComponent,
    BorderCardDirective,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonsModule { }
