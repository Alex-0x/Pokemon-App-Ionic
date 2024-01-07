import { environment } from 'src/environments/environment';
import { IPokemon } from '../interface/pokemon.interface';

export class Pokemon {
  name!: string;
  img: string;
  id: number;

  constructor(pokData: IPokemon) {
    this.name = pokData.name;
    //per catturare l'id dall'url
    const pieces = pokData.url.split('/');
    this.id = +pieces[pieces.length - 2];
    //ricostruisco l'url per l'immagine
    this.img = environment.pokImgUrl + this.id + '.png';
  }
}
