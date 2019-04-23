import {FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, FETCH_QUICK_REC_SUCCESS, FETCH_QUICK_REC_ERROR, FETCH_CATALOG_SUCCESS, FETCH_CATALOG_ERROR} from '../actions/rex';

const initialState = {
  movies: [],
  catalog: [],
  shows: [],
  quickRec: {},
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
  else if(action.type === FETCH_QUICK_REC_SUCCESS){
    return{
      ...state,
      quickRec: action.item,
      loading: false,
    }
  }
  else if(action.type === FETCH_QUICK_REC_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === FETCH_CATALOG_SUCCESS){
    return{
      ...state,
      catalog: [...action.catalog],
      loading: false,
    }
  }
  else if(action.type === FETCH_CATALOG_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  return state;
}