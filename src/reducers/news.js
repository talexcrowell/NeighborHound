import {FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR, FETCH_ALL_NEWS_FEED_SUCCESS, FETCH_ALL_NEWS_FEED_ERROR, REMOVE_ARTICLE_FROM_FEED} from '../actions/news';

const initialState = {
  all:[],
  articles: [],
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
      articles: [...action.news],
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
  else if(action.type === FETCH_ALL_NEWS_FEED_SUCCESS){
    return{
      ...state,
      all: [...action.news],
      loading: false
    }
  }
  else if(action.type === FETCH_ALL_NEWS_FEED_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  else if(action.type === REMOVE_ARTICLE_FROM_FEED){
    return{
      ...state,
      articles: state.articles.filter((article)=> article.id !== action.id),
      all: state.all.filter((article)=> article.id !== action.id)
    }
  }
  return state;
}