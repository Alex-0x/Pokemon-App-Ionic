import { Component, OnInit } from '@angular/core';
import { Observable, from, of, switchMap } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { PokemonApiService } from '../services/pokemon-api.service';
import { SearchbarChangeEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-favorite',
  templateUrl: '../home/home.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  filterPokemons($event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) {
    throw new Error('Method not implemented.');
  }
  pokemons$!: Observable<Pokemon[]>;

  public pageTitle = 'Favorite POKEMONS';
  public isFavoritePage = true;
  constructor(private pokService: PokemonApiService) {}
  //ngOnInit avviene solo la primma volta che si entra nella pagina
  ngOnInit() {}
  populateFavorite() {
    this.pokemons$ = this.pokService.getFavoritePokemon('');
  }
  //questo metodo accade ogni volta che visitiamo la pagina e si aggiorna
  ionViewWillEnter() {
    this.pokemons$ = this.pokService.getFavoritePokemon('');
    this.populateFavorite();
  }

  filterPokemon($event: any) {
    this.pokemons$ = this.pokService.getFavoritePokemon($event.target.value);
  }
  clearFilter($event: any) {
    console.log('event', $event);
  }
  async favorite(pok: Pokemon) {
    await this.pokService.addPokemonToFavorite(pok, true);
    this.populateFavorite();
    this.pokemons$.subscribe((res) => {
      console.log(`pokemon reloaded ${res.length}`);
    });
  }
  share(pok: Pokemon) {}
  isPokFavorite(pok: Pokemon): any {}
}
