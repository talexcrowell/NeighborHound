import {API_BASE_URL} from '../config';

export const FETCH_MAIN_FEED_REQUEST = 'FETCH_MAIN_FEED_REQUEST';
export const fetchMainFeedRequest = () => ({
  type: FETCH_MAIN_FEED_REQUEST
});

export const FETCH_MAIN_FEED_SUCCESS = 'FETCH_MAIN_FEED_SUCCESS';
export const fetchMainFeedSuccess = (posts) => ({
  type: FETCH_MAIN_FEED_SUCCESS,
  posts
});

export const FETCH_MAIN_FEED_ERROR = 'FETCH_MAIN_FEED_ERROR';
export const fetchMainFeedError = (error) => ({
  type: FETCH_MAIN_FEED_ERROR,
  error
});

export const REMOVE_ITEM_FROM_FEED= 'REMOVE_POST_FROM_FEED';
export const removePostFromFeed = (id) => ({
  type: REMOVE_ITEM_FROM_FEED,
  id
});


export const fetchMainFeed = () => {
  return (dispatch, getState) => {
    dispatch(fetchMainFeedRequest());
    fetch(`${API_BASE_URL}/api/main/`)
    .then(res => res.json())
    .then(data => dispatch(fetchMainFeedSuccess(data)))
    .catch(err => dispatch(fetchMainFeedError(err)))
  }
}