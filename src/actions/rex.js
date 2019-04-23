import {API_BASE_URL} from '../config';

export const FETCH_MEDIA_REQUEST = 'FETCH_MEDIA_REQUEST';
export const fetchMediaRequest = () => ({
  type: FETCH_MEDIA_REQUEST
});

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  error
});

export const FETCH_QUICK_REC_SUCCESS = 'FETCH_QUICK_REC_SUCCESS';
export const fetchQuickRecSuccess = (item) => ({
  type: FETCH_QUICK_REC_SUCCESS,
  item
});

export const FETCH_QUICK_REC_ERROR = 'FETCH_QUICK_REC_ERROR';
export const fetchQuickRecError = (error) => ({
  type: FETCH_QUICK_REC_ERROR,
  error
});

export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const fetchCatalogSuccess = (catalog) => ({
  type: FETCH_CATALOG_SUCCESS,
  catalog
});

export const FETCH_CATALOG_ERROR = 'FETCH_CATALOG_ERROR';
export const fetchCatalogError = (error) => ({
  type: FETCH_CATALOG_ERROR,
  error
});

export const FETCH_UPCOMING_MOVIES_SUCCESS = 'FETCH_UPCOMING_MOVIES_SUCCESS';
export const fetchUpcomingMoviesSuccess = (movies) => ({
  type: FETCH_UPCOMING_MOVIES_SUCCESS,
  movies
});

export const FETCH_UPCOMING_MOVIES_ERROR = 'FETCH_UPCOMING_MOVIES_ERROR';
export const fetchUpcomingMoviesError = (error) => ({
  type: FETCH_UPCOMING_MOVIES_ERROR,
  error
});

export const FETCH_AIRING_TODAY_SUCCESS = 'FETCH_AIRING_TODAY_SUCCESS';
export const fetchAiringTodaySuccess = (shows) => ({
  type: FETCH_AIRING_TODAY_SUCCESS,
  shows
});

export const FETCH_AIRING_TODAY_ERROR = 'FETCH_AIRING_TODAY_ERROR';
export const fetchAiringTodayError = (error) => ({
  type: FETCH_AIRING_TODAY_ERROR,
  error
});

export const fetchQuickReccommendation = () => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/quickrec`)
    .then(res => res.json())
    .then(data => dispatch(fetchQuickRecSuccess(data)))
    .catch(err => dispatch(fetchQuickRecError(err)))
  }
}

export const fetchMediaCatalog = () => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/catalog`)
    .then(res => res.json())
    .then(data => dispatch(fetchCatalogSuccess(data)))
    .catch(err => dispatch(fetchCatalogError(err)))
  }
}

export const fetchUpcomingMovies = () => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/upcoming`)
    .then(res => res.json())
    .then(data => dispatch(fetchUpcomingMoviesSuccess(data)))
    .catch(err => dispatch(fetchUpcomingMoviesError(err)))
  }
}

export const fetchAiringTodayTV = () => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/schedule`)
    .then(res => res.json())
    .then(data => dispatch(fetchAiringTodaySuccess(data)))
    .catch(err => dispatch(fetchAiringTodayError(err)))
  }
}

export const fetchMovies = () => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/retrieve`)
    .then(res => res.json())
    .then(data => dispatch(fetchMoviesSuccess(data)))
    .catch(err => dispatch(fetchMoviesError(err)))
  }
}