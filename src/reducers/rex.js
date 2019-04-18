import {FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR} from '../actions/rex';

const initialState = {
  movies: [],
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