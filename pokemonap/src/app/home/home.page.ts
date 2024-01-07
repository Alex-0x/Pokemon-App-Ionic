import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../services/pokemon-api.service';
import { Pokemon } from '../models/Pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons$!: Observable<Pokemon[]>;
  constructor(public pokService: PokemonApiService) {}

  ngOnInit() {
    this.pokService.getPokemons().subscribe((res) => {
      this.pokemons$ = this.pokService.getPokemons();
    });
  }
}
