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

export const fetchCommunity = () => {
  return (dispatch, getState) => {
    dispatch(fetchCommunityRequest());
    fetch(`${API_BASE_URL}/api/community`)
    .then(res => res.json())
    .then(data => dispatch(fetchCommunitySuccess(data)))
    .catch(err => dispatch(fetchCommunityError(err)))
  }
}