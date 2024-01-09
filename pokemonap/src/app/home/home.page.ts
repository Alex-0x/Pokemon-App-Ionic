import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonApiService } from '../services/pokemon-api.service';
import { Pokemon } from '../models/Pokemon';
import { Observable } from 'rxjs';
import { IonList, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonList) pokList!: IonList;
  pokemons$!: Observable<Pokemon[]>;
  public pageTitle = 'POKEMONS';
  public isFavoritePage = false;
  public favorites!: Pokemon[] | undefined;
  private loading: any;

  constructor(
    public pokService: PokemonApiService,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    this.loading = await this.presentLoading();
    await this.loading.present();
    this.favorites = await this.pokService.getFavoritePokemon('').toPromise();
    this.pokemons$ = this.pokService.getPokemons('');
    this.pokemons$.subscribe(() => {
      this.loading.dismiss();
    });
  }

  async presentLoading() {
    return await this.loadingCtrl.create({
      message: 'Please wait...',
    });
  }

  filterPokemons($event: any) {
    this.pokemons$ = this.pokService.getPokemons($event.target.value);
  }

  public isPokFavorite(pok: Pokemon) {
    const poks = this.favorites!.filter((fPok) => fPok.name === pok.name);
    return poks.length > 0;
  }

  async favorite(pok: Pokemon) {
    await this.pokService.addPokemonToFavorite(pok, this.isPokFavorite(pok));
    await this.pokList.closeSlidingItems();
  }

  share(pok: Pokemon) {}

  clearFilter($event: any) {}
}
