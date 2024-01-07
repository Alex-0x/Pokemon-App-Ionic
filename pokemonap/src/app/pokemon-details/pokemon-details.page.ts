import { PokemonApiService } from './../services/pokemon-api.service';
import { Pokemon } from './../models/Pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IPokemonData } from '../interface/pokemon.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  public pokemon!: Pokemon;
  public pokemonData$!: Observable<IPokemonData>;
  constructor(
    private router: ActivatedRoute,
    private pokService: PokemonApiService
  ) {}

  ngOnInit() {
    const idString = this.router.snapshot.paramMap.get('id');
    if (idString) {
      const id = +idString;
      const name = this.router.snapshot.queryParamMap.get('name');

      this.pokemon = new Pokemon({
        name: name ?? '',
        url: environment.pokImgUrl + '/' + id + '/',
      });

      this.pokemonData$ = this.pokService.getPokemonData(id);
    } else {
      console.error("L'ID non è presente nella route.");
    }
  }
}
