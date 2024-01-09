// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokeUrl: 'https://pokeapi.co/api/v2/pokemon',
  pokImgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
  limit: 100,
};

//img noOffical => https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
//img official
// https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
