import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonApiService } from '../services/pokemon-api.service';
import { Pokemon } from '../models/Pokemon';
import { Observable } from 'rxjs';
import {
  IonList,
  LoadingController,
  MenuController,
  ToastController,
} from '@ionic/angular';

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
    private loadingCtrl: LoadingController,
    private toast: ToastController,
    private menuCtrl: MenuController
  ) {}

  async openMenu() {
    await this.menuCtrl.open('mainMenu');
  }

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

  async presentToast(msg: string, color: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      position: 'middle',
      animated: true,
      color,
    });
    return await toast.present();
  }

  async favorite(pok: Pokemon, event: any) {
    const isFav = this.isPokFavorite(pok);
    const result = await this.pokService.addPokemonToFavorite(pok, isFav);
    this.favorites = await this.pokService.getFavoritePokemon('').toPromise();
    let item;
    if (event.target.nodeName.toUpperCase() === 'ION-ICON') {
      item = event.target.parentNode;
    } else {
      item = event.target;
    }

    if (!isFav && result) {
      await this.presentToast(pok.name + ' added to favorite!', 'danger');
      item.color = 'danger';
    } else {
      item.color = 'primary';
      await this.presentToast(pok.name + ' removed to favorite!', 'primary');
    }
    await this.pokList.closeSlidingItems();
  }

  share(pok: Pokemon) {}

  clearFilter($event: any) {}
}
