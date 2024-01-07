export interface IPokemon {
  name: string;
  url: string;
}

export interface IResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export interface Ability2 {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability2;
  isHidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface GameIndice {
  gameIndex: number;
  version: Version;
}

export interface Move2 {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  levelLearnedAt: number;
  moveLearnMethod: MoveLearnMethod;
  versionGroup: VersionGroup;
}

export interface Move {
  move: Move2;
  versionProupDetails: VersionGroupDetail[];
}

export interface Species {
  name: string;
  url: string;
}

export interface DreamWorld {
  frontDefault: string;
  frontFemale?: any;
}

export interface OfficialArtwork {
  frontFefault: string;
}

export interface RedBlue {
  backDefault: string;
  backGray: string;
  frontDefault: string;
  frontGray: string;
}

export interface Yellow {
  backDefault: string;
  backGray: string;
  frontDefault: string;
  frontGray: string;
}

export interface Crystal {
  backDefault: string;
  backShiny: string;
  frontDefault: string;
  frontShiny: string;
}

export interface Gold {
  backDefault: string;
  backshiny: string;
  frontdefault: string;
  frontshiny: string;
}

export interface Silver {
  backDefault: string;
  backshiny: string;
  frontdefault: string;
  frontshiny: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Emerald {
  frontdefault: string;
  frontshiny: string;
}

export interface FireredLeafgreen {
  backDefault: string;
  backshiny: string;
  frontdefault: string;
  frontshiny: string;
}

export interface RubySapphire {
  backDefault: string;
  backshiny: string;
  frontdefault: string;
  frontshiny: string;
}

export interface DiamondPearl {
  backDefault: string;
  backfemale?: any;
  backshiny: string;
  backshinyfemale?: any;
  frontdefault: string;
  frontfemale?: any;
  frontshiny: string;
  frontshinyfemale?: any;
}

export interface HeartgoldSoulsilver {
  backDefault: string;
  backfemale?: any;
  backshiny: string;
  backshinyfemale?: any;
  frontdefault: string;
  frontfemale?: any;
  frontshiny: string;
  frontshinyfemale?: any;
}

export interface Platinum {
  backDefault: string;
  backfemale?: any;
  backshiny: string;
  backshinyfemale?: any;
  frontdefault: string;
  frontfemale?: any;
  frontshiny: string;
  frontshinyfemale?: any;
}

export interface Animated {
  backDefault: string;
  backfemale?: any;
  backshiny: string;
  backshinyfemale?: any;
  frontdefault: string;
  frontfemale?: any;
  frontshiny: string;
  frontshinyfemale?: any;
}

export interface BlackWhite {
  animated: Animated;
  backDefault: string;
  backfemale?: any;
  backshiny: string;
  backshinyfemale?: any;
  frontdefault: string;
  frontfemale?: any;
  frontshiny: string;
  frontshinyfemale?: any;
}

export interface OmegarubyAlphasapphire {
  frontdefault: string;
  frontfemale?: any;
  frontshiny: string;
  frontshinyfemale?: any;
}

export interface XY {
  frontdefault: string;
  frontfemale?: any;
  frontshiny: string;
  frontshinyfemale?: any;
}

export interface Icons {
  frontdefault: string;
  frontfemale?: any;
}

export interface UltraSunUltraMoon {
  frontdefault: string;
  frontfemale?: any;
  frontshiny: string;
  frontshinyfemale?: any;
}

export interface Icons2 {
  frontdefault: string;
  frontfemale?: any;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Sprites {
  backDefault: string;
  backFemale?: any;
  backShiny: string;
  backShinyFemale?: any;
  frontFefault: string;
  frontFemale?: any;
  frontShiny: string;
  frontShinyFemale?: any;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Stat {
  baseStat: number;
  effort: number;
  stat: Stat2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface IPokemonData {
  abilities: Ability[];
  baseExperience: number;
  forms: Form[];
  gameIndices: GameIndice[];
  height: number;
  heldItems: any[];
  id: number;
  isDefault: boolean;
  locationAreaEncounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
