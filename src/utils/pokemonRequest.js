import { Observable } from 'rxjs';
import { POKEAPI_BASE_URL } from '../constants/api-url';

// This is a thunk! It's a function that returns another function!
// Here it makes an ajax request, and dispatches the different states
// of the request (ie START, SUCCESS and FAILURE)

export const pokemonRequest = ({ type, endpoint }) => {
  return dispatch => {
    dispatch({ type: type.START });
    return fetch(`${POKEAPI_BASE_URL}/${endpoint}`)
      .then(res => res.json())
      .then(
        data => {
          dispatch({ type: type.SUCCESS, payload: data });
        },
        error => {
          dispatch({ type: type.FAILURE });
        },
      )
      .catch(eror => {
        dispatch({ type: type.FAILURE });
      });
  };
};



export const cleanPokemonRequest = ({ type, endpoint }) => {
  return Observable.from(
    fetch(`${POKEAPI_BASE_URL}/${endpoint}`)
      .then(res => res.json())
  );
};

