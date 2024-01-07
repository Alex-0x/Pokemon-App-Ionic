import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  IPokemon,
  IPokemonData,
  IResult,
} from '../interface/pokemon.interface';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(public http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    const url = environment.pokeUrl + '?limit=' + environment.limit;
    return this.http.get<IResult>(url).pipe(
      //sono due map diversi il primo di rjsx e l'altro di js
      map((res: IResult) => res.results.map((res) => new Pokemon(res))),
      tap((res: Pokemon[]) => console.log(res))
    );
  }

  getPokemonData(id: number): Observable<IPokemonData> {
    const url = environment.pokeUrl + '/' + id + '/';
    return this.http.get<IPokemonData>(url);
  }
}
