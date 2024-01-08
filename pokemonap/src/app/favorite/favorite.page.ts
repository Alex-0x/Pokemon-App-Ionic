import { Component, OnInit } from '@angular/core';
import { Observable, from, of, switchMap } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-favorite',
  templateUrl: '../home/home.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  pokemons$!: Observable<Pokemon[]>;
  constructor(private pokService: PokemonApiService) {}
  //ngOnInit avviene solo la primma volta che si entra nella pagina
  ngOnInit() {}
  //questo metodo accade ogni volta che visitiamo la pagina e si aggiorna
  ionViewWillEnter() {
    from(this.pokService.getFavoritePokemons())
      .pipe(
        switchMap(
          (favoritePokemonsObservable: Observable<any>) =>
            favoritePokemonsObservable
        )
      )
      .subscribe((favoritePokemons: Pokemon[]) => {
        this.pokemons$ = of(favoritePokemons);
      });
  }
}
