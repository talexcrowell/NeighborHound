import {FETCH_MAIN_FEED_REQUEST, FETCH_MAIN_FEED_SUCCESS, FETCH_MAIN_FEED_ERROR, REMOVE_ITEM_FROM_FEED} from '../actions/main';

const initialState = {
  posts: [],
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
      posts: [...action.posts],
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
  else if(action.type === REMOVE_ITEM_FROM_FEED){
    return{
      ...state,
      posts: state.feed.filter(item => item.id !== action.id),
      error: null
    }
  }
  return state;
}