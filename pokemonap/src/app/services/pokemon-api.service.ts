import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  IPokemon,
  IPokemonData,
  IResult,
} from '../interface/pokemon.interface';
import { Observable, from, merge } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { Storage } from '@ionic/storage-angular';

const POKEMON_KEY = 'pokemons';
const POKEMON_FAVORITE = 'pokemons-favorite';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
  }

  getPokemons(pokemonName: string): Observable<Pokemon[]> {
    const url = environment.pokeUrl + '?limit=' + environment.limit;
    const cacheData = from(this.storage.get(POKEMON_KEY));
    cacheData.subscribe((res) => {
      console.log('cache', res);
    });
    return merge(cacheData, this.http.get<IResult>(url)).pipe(
      //sono due map diversi il primo di rjsx e l'altro di js
      // il merge unisce i due dati degli observable
      map((res: IResult) => {
        if (!res) {
          return [];
        }
        // Se abbiamo una risposta, mettiamo i dati nella cache
        this.storage.set(POKEMON_KEY, res);
        if (pokemonName.length > 0) {
          res.results = res.results.filter((p) =>
            //filtro per la prima parola
            p.name.startsWith(pokemonName)
          );
        }
        return res.results.map((pokemonData) => new Pokemon(pokemonData));
      }),
      tap((res: Pokemon[]) => console.log(res))
    );
  }

  getPokemonData(id: number): Observable<IPokemonData> {
    const url = environment.pokeUrl + '/' + id + '/';
    return this.http.get<IPokemonData>(url);
  }
  async addPokemonToFavorite(pok: Pokemon, isFavorite: boolean) {
    //prima cosa controlliamo se già ci sono pokemon tra i preferiti sennò torniamo un array vuoto
    let data: Pokemon[] = (await this.storage.get(POKEMON_FAVORITE)) ?? [];
    if (!isFavorite && data.some((res) => +res.id == +pok.id)) {
      return;
    }
    if (!isFavorite) {
      data.push(pok);
    } else {
      //filtro tutti i pokemon che c'erano tranne quello che sta passando
      data = data.filter((res) => res.id !== pok.id);
    }

    return await this.storage.set(POKEMON_FAVORITE, data);
  }
  async getFavoritePokemons() {
    return from(this.storage.get(POKEMON_FAVORITE));
  }
  async isPokemonFavorite(pok: Pokemon) {
    let data: Pokemon[] = (await this.storage.get(POKEMON_FAVORITE)) ?? [];
    if (data.length === 0) {
      return false;
    }
    if (data.some((res) => +res.id == +pok.id)) {
      return true;
    }
    return false;
  }
}
