import {API_BASE_URL} from '../config';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST
});

export const FETCH_COMMUNITY_SUCCESS = 'FETCH_COMMUNITY_SUCCESS';
export const fetchCommunitySuccess = (posts) => ({
  type: FETCH_COMMUNITY_SUCCESS,
  posts
});

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const fetchNewsSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  news,
});

export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';
export const fetchNewsError = (error) => ({
  type: FETCH_NEWS_ERROR,
  error
});

export const FETCH_ALL_NEWS_FEED_SUCCESS = 'FETCH_ALL_NEWS_FEED_SUCCESS';
export const fetchAllNewsFeedSuccess = (news) => ({
  type: FETCH_ALL_NEWS_FEED_SUCCESS,
  news,
});

export const FETCH_ALL_NEWS_FEED_ERROR = 'FETCH_ALL_NEWS_FEED_ERROR';
export const fetchAllNewsFeedError = (error) => ({
  type: FETCH_ALL_NEWS_FEED_ERROR,
  error
});

export const REMOVE_ARTICLE_FROM_FEED= 'REMOVE_ARTICLE_FROM_FEED';
export const removeArticleFromFeed = (id) => ({
  type: REMOVE_ARTICLE_FROM_FEED,
  id
});


export const FETCH_NEWS_SEARCH_SUCCESS = 'FETCH_NEWS_SEARCH_SUCCESS';
export const fetchNewsSearchSuccess = (news) => ({
  type: FETCH_NEWS_SEARCH_SUCCESS,
  news,
});

export const FETCH_NEWS_SEARCH_ERROR = 'FETCH_NEWS_SEARCH_ERROR';
export const fetchNewsSearchError = (error) => ({
  type: FETCH_NEWS_SEARCH_ERROR,
  error
});

export const fetchAllNewsFeed = () => {
  return (dispatch, getState) => {
    dispatch(fetchNewsRequest());
    fetch(`${API_BASE_URL}/api/news/all`,{
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(fetchAllNewsFeedSuccess(data)))
    .catch(err => dispatch(fetchAllNewsFeedError(err)))
  }
}

export const fetchNews = () => {
  return (dispatch, getState) => {
    dispatch(fetchNewsRequest());
    fetch(`${API_BASE_URL}/api/news/articles`,{
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(fetchNewsSuccess(data)))
    .catch(err => dispatch(fetchNewsError(err)))
  }
}

export const searchNews = (query) => {
  console.log(query);
  return (dispatch, getState) => {
    dispatch(fetchNewsRequest());
    fetch(`${API_BASE_URL}/api/news/search`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    })
    .then(res => res.json())
    .then(data => dispatch(fetchNewsSearchSuccess(data)))
    .catch(err => dispatch(fetchNewsSearchError(err)))
  }
}
