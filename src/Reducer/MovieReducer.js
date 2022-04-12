import AsyncStorage from '@react-native-async-storage/async-storage';
import {searchMovie} from '../Api/Api';
import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FAV_KEY,
  LOAD_LOCAL_FAVORITES,
  SEARCH_ERROR,
  SEARCH_MOVIE,
} from '../Consts/consts';

export const MovieReducer = (state, actions) => {
  switch (actions.type) {
    case SEARCH_MOVIE:
      return {...state, errorMessage: '', movieResults: actions.payload};
    case SEARCH_ERROR:
      return {...state, movieResults: [], errorMessage: actions.payload};
    case ADD_FAVORITES:
      return {...state, favorites: actions.payload};
    case DELETE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(movie => {
          return movie.imdbID !== actions.payload;
        }),
      };
    case LOAD_LOCAL_FAVORITES:
      return {...state, favorites: actions.payload};
    default:
      return state;
  }
};

export const searchMovies = async (text, dispatch) => {
  try {
    const res = await searchMovie(`s=${text}`);

    res
      ? dispatch({type: SEARCH_MOVIE, payload: res})
      : dispatch({
          type: SEARCH_ERROR,
          payload: 'No se encontraron resultados',
        });
  } catch (err) {}
};

export const addMovie = async (movie, dispatch) => {
  await AsyncStorage.setItem(FAV_KEY, JSON.stringify(movie));
  dispatch({type: ADD_FAVORITES, payload: movie});
};

export const localFavorites = async () => {
  const local = await AsyncStorage.getItem(FAV_KEY);
  // console.log(JSON.parse(local));
  return {type: LOAD_LOCAL_FAVORITES, payload: JSON.parse(local)};
};
