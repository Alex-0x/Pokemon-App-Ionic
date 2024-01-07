import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    const name = this.router.snapshot.queryParamMap.get('name');
  }
}
