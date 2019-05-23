import {API_BASE_URL} from '../config';

export const FETCH_COMMUNITY_REQUEST = 'FETCH_COMMUNITY_REQUEST';
export const fetchCommunityRequest = () => ({
  type: FETCH_COMMUNITY_REQUEST
});

export const FETCH_COMMUNITY_SUCCESS = 'FETCH_COMMUNITY_SUCCESS';
export const fetchCommunitySuccess = (posts) => ({
  type: FETCH_COMMUNITY_SUCCESS,
  posts
});

export const FETCH_COMMUNITY_ERROR = 'FETCH_COMMUNITY_ERROR';
export const fetchCommunityError = (error) => ({
  type: FETCH_COMMUNITY_ERROR,
  error
});


export const FETCH_COMMUNITY_SEARCH_SUCCESS = 'FETCH_COMMUNITY_SEARCH_SUCCESS';
export const fetchCommunitySearchSuccess = (posts) => ({
  type: FETCH_COMMUNITY_SEARCH_SUCCESS,
  posts
});

export const FETCH_COMMUNITY_SEARCH_ERROR = 'FETCH_COMMUNITY_SEARCH_ERROR';
export const fetchCommunitySearchError = (error) => ({
  type: FETCH_COMMUNITY_SEARCH_ERROR,
  error
});


export const REMOVE_POST_FROM_FEED= 'REMOVE_POST_FROM_FEED';
export const removePostFromFeed = (id) => ({
  type: REMOVE_POST_FROM_FEED,
  id
});

export const CLEAR_SEARCH= 'CLEAR_SEARCH';
export const clearSearch = () => ({
  type: CLEAR_SEARCH,
  
});


export const fetchCommunity = () => {
  return (dispatch, getState) => {
    dispatch(fetchCommunityRequest());
    fetch(`${API_BASE_URL}/api/community/all`)
    .then(res => res.json())
    .then(data => dispatch(fetchCommunitySuccess(data)))
    .catch(err => dispatch(fetchCommunityError(err)))
  }
}

export const searchCommunity = (query) => {
  return (dispatch, getState) => {
    dispatch(fetchCommunityRequest());
    fetch(`${API_BASE_URL}/api/community/search`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    })
    .then(res => res.json())
    .then(data => dispatch(fetchCommunitySearchSuccess(data)))
    .catch(err => dispatch(fetchCommunitySearchError(err)))
  }
}

export const generateCustom = (query) => {
  console.log(query);
  return (dispatch, getState) => {
    dispatch(fetchCommunityRequest());
    fetch(`${API_BASE_URL}/api/community/custom`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    })
    .then(res => res.json())
    .then(data => dispatch(fetchCommunitySearchSuccess(data)))
    .catch(err => dispatch(fetchCommunitySearchError(err)))
  }
}