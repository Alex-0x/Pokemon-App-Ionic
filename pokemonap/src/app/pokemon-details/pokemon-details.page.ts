import { PokemonApiService } from './../services/pokemon-api.service';
import { Pokemon } from './../models/Pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IPokemonData } from '../interface/pokemon.interface';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  public pokemon!: Pokemon;
  public pokemonData$!: Observable<IPokemonData>;
  private id!: number;
  isFavorite: boolean = false;
  constructor(
    private loadingCtrl: LoadingController,
    private router: ActivatedRoute,
    private pokService: PokemonApiService,
    private route: Router
  ) {}
  async ngOnInit() {}
  async ionViewWillEnter() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });

    const idString = this.router.snapshot.paramMap.get('id');
    if (idString) {
      const id = +idString;
      const name = this.router.snapshot.queryParamMap.get('name');

      this.pokemon = new Pokemon({
        name: name ?? '',
        url: environment.pokImgUrl + '/' + id + '/',
      });
      await loading.present();
      this.id = id;
      this.pokemonData$ = this.pokService.getPokemonData(id);
      this.isFavorite = await this.pokService.isPokemonFavorite(this.pokemon);
      this.pokemonData$.subscribe(() => loading.dismiss());
    } else {
      console.error("L'ID non è presente nella route.");
    }
  }

  async addToFavorite() {
    const result = await this.pokService.addPokemonToFavorite(
      this.pokemon,
      this.isFavorite
    );
    alert(result);
    this.route.navigate(['/pokemons/favorites']);
  }
  share() {}
}
