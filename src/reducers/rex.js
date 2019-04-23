import {FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR} from '../actions/rex';

const initialState = {
  movies: [],
  quickRec: {
    "id": 47,
    "title": "The Orville",
    "moviedbid": "71738",
    "url": "https://www.themoviedb.org/tv/71738",
    "language": "en",
    "released": "2017-09-10",
    "img": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1q2gRQ8uN8D2ythPMzd5NvsHkVf.jpg",
    "overview": "Follows the crew of the not-so-functional exploratory ship in the Earth's interstellar fleet, 400 years in the future.",
    "genres": "filler",
    "moviedbrating": 7.1
  },
  loading: false,
  error: null
};

export default function rexReducer(state=initialState, action){
  if(action.type === FETCH_MOVIES_REQUEST){
    return{
      ...state,
      loading: true
    }
  }
  else if(action.type === FETCH_MOVIES_SUCCESS){
    return{
      ...state,
      movies: [...action.movies],
      loading: false
    }
  }
  else if(action.type === FETCH_MOVIES_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  return state;
}