import {FETCH_MAIN_FEED_REQUEST, FETCH_MAIN_FEED_SUCCESS, FETCH_MAIN_FEED_ERROR, REMOVE_ITEM_FROM_FEED, SEARCH_FEED, TOGGLE_FILTER} from '../actions/main';

const initialState = {
  feed: [],
  filtered: false,
  filterQuery: [],
  searchQuery: '',
  loading: false,
  error: null
};

export default function mainReducer(state=initialState, action){
  if(action.type === FETCH_MAIN_FEED_REQUEST){
    return{
      ...state,
      loading: true
    }
  }
  else if(action.type === FETCH_MAIN_FEED_SUCCESS){
    return{
      ...state,
      feed: [...action.items],
      loading: false
    }
  }
  else if(action.type === FETCH_MAIN_FEED_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === TOGGLE_FILTER){
    return{
      ...state,
      filtered: !state.filtered,
      error: null
    }
  }
  else if(action.type === SEARCH_FEED){
    return{
      ...state,
      searchQuery: action.search,
      error: null
    }
  }
  else if(action.type === REMOVE_ITEM_FROM_FEED){
    return{
      ...state,
      feed: state.feed.filter(item => item.id !== action.id),
      error: null
    }
  }
  return state;
}