import {FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR, FETCH_ANIMENEWS_SUCCESS, FETCH_CYBERSECURITYNEWS_SUCCESS} from '../actions/news';

const initialState = {
  articles: [],
  anime: [],
  csn: [],
  loading: false,
  error: null
};

export default function newsReducer(state=initialState, action){
  if(action.type === FETCH_NEWS_REQUEST){
    return{
      ...state,
      loading: true
    }
  }
  else if(action.type === FETCH_NEWS_SUCCESS){
    return{
      ...state,
      articles: [...action.news.blogs],
      loading: false
    }
  }
  else if(action.type === FETCH_ANIMENEWS_SUCCESS){
    return{
      ...state,
      anime: [...action.news.data],
      loading: false
    }
  }
  else if(action.type === FETCH_CYBERSECURITYNEWS_SUCCESS){
    return{
      ...state,
      csn: [...action.news],
      loading: false
    }
  }
  else if(action.type === FETCH_NEWS_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  return state;
}