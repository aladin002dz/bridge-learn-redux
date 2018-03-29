import 'rxjs/add/operator/mergeMap';

import { FETCH_POKEMONS } from '../pokemon-list/pokemon-list.types';
import { cleanPokemonRequest } from '../../utils/pokemonRequest';

export const fetchPokemonsEpic = action$ => 
    action$.ofType(FETCH_POKEMONS.START)
    .mergeMap(action => 
        cleanPokemonRequest(action)
        .map((results) => ({
            type: FETCH_POKEMONS.SUCCESS,
            payload: results,
        })
    ));


// errors
// loading example
// multiple streams

