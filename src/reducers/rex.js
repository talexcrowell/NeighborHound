import {
  FETCH_MEDIA_REQUEST, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_ERROR, 
  FETCH_QUICK_REC_SUCCESS, 
  FETCH_QUICK_REC_ERROR, 
  FETCH_CATALOG_SUCCESS, 
  FETCH_CATALOG_ERROR, 
  FETCH_UPCOMING_MOVIES_SUCCESS, 
  FETCH_UPCOMING_MOVIES_ERROR, 
  FETCH_AIRING_TODAY_SUCCESS, 
  FETCH_AIRING_TODAY_ERROR, 
  VIEW_DETAILS,
  CLOSE_DETAILS,
  FETCH_ON_THE_AIR_SUCCESS,
  FETCH_ON_THE_AIR_ERROR,
  FETCH_CURRENTLY_PLAYING_SUCCESS,
  FETCH_CURRENTLY_PLAYING_ERROR,
  FETCH_TV_PAGE_SUCCESS,
  FETCH_TV_PAGE_ERROR
} from '../actions/rex';

const initialState = {
  movies: [],
  catalog: [],
  shows: [],
  nowPlaying: [],
  upcoming: [],
  airingToday: [],
  schedule: [],
  view: null,
  quickRec: {},
  loading: false,
  error: null,
  pages: {}
};

export default function rexReducer(state=initialState, action){
  if(action.type === FETCH_MEDIA_REQUEST){
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
  else if(action.type === FETCH_UPCOMING_MOVIES_SUCCESS){
    return{
      ...state,
      loading: false,
      upcoming: [...action.movies]
    }
  }
  else if(action.type === FETCH_UPCOMING_MOVIES_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === FETCH_AIRING_TODAY_SUCCESS){
    return{
      ...state,
      loading: false,
      airingToday: [...action.response.data],
      pages:{
        page: action.response.page,
        total: action.response.totalPages
      }
    }
  }
  else if(action.type === FETCH_AIRING_TODAY_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === FETCH_ON_THE_AIR_SUCCESS){
    return{
      ...state,
      loading: false,
      schedule: [...action.response.data],
      pages:{
        page: action.response.page,
        total: action.response.totalPages
      }
    }
  }
  else if(action.type === FETCH_ON_THE_AIR_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === FETCH_CURRENTLY_PLAYING_SUCCESS){
    return{
      ...state,
      loading: false,
      nowPlaying: [...action.movies]
    }
  }
  else if(action.type === FETCH_CURRENTLY_PLAYING_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === FETCH_TV_PAGE_SUCCESS && action.response.schedule === 'today'){
    return{ 
      ...state,
      loading: false,
      airingToday: [...action.response.data],
      pages:{
        page: action.response.page,
        total: action.response.totalPages
      }
    }
  }
  else if(action.type === FETCH_TV_PAGE_SUCCESS && action.response.schedule === 'ontheair'){
    return{ 
      ...state,
      loading: false,
      schedule: [...action.response.data],
      pages:{
        page: action.response.page,
        total: action.response.totalPages
      }
    }
  }
  else if(action.type === FETCH_TV_PAGE_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === VIEW_DETAILS){
    return{
      ...state,
      loading: false,
      view: action.media
    }
  }
  else if(action.type === CLOSE_DETAILS){
    return{
      ...state,
      loading: false,
      view: null
    }
  }
  return state;
}