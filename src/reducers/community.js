import {FETCH_COMMUNITY_REQUEST, FETCH_COMMUNITY_SUCCESS, FETCH_COMMUNITY_ERROR, REMOVE_POST_FROM_FEED} from '../actions/community';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

export default function communityReducer(state=initialState, action){
  if(action.type === FETCH_COMMUNITY_REQUEST){
    return{
      ...state,
      loading: true
    }
  }
  else if(action.type === FETCH_COMMUNITY_SUCCESS){
    return{
      ...state,
      posts: [...action.posts],
      loading: false
    }
  }
  else if(action.type === FETCH_COMMUNITY_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === REMOVE_POST_FROM_FEED){
    return{
      ...state,
      posts: state.posts.filter(post => post.id !== action.id),
      error: null
    }
  }
  return state;
}