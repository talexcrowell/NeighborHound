import {FETCH_COMMUNITY_REQUEST, FETCH_COMMUNITY_SUCCESS, FETCH_COMMUNITY_ERROR} from '../actions/community';

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
  return state;
}