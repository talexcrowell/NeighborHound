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
export const fetchAiringTodaySuccess = (response) => ({
  type: FETCH_AIRING_TODAY_SUCCESS,
  response
});

export const FETCH_AIRING_TODAY_ERROR = 'FETCH_AIRING_TODAY_ERROR';
export const fetchAiringTodayError = (error) => ({
  type: FETCH_AIRING_TODAY_ERROR,
  error
});

export const FETCH_ON_THE_AIR_SUCCESS = 'FETCH_ON_THE_AIR_SUCCESS';
export const fetchOnTheAirSuccess = (response) => ({
  type: FETCH_ON_THE_AIR_SUCCESS,
  response
});

export const FETCH_ON_THE_AIR_ERROR = 'FETCH_ON_THE_AIR_ERROR';
export const fetchOnTheAirError = (error) => ({
  type: FETCH_ON_THE_AIR_ERROR,
  error
});

export const FETCH_CURRENTLY_PLAYING_SUCCESS = 'FETCH_CURRENTLY_PLAYING_SUCCESS';
export const fetchCurrentlyPlayingSuccess = (movies) => ({
  type: FETCH_CURRENTLY_PLAYING_SUCCESS,
  movies
});

export const FETCH_CURRENTLY_PLAYING_ERROR = 'FETCH_CURRENTLY_PLAYING_ERROR';
export const fetchCurrentlyPlayingError = (error) => ({
  type: FETCH_CURRENTLY_PLAYING_ERROR,
  error
});

export const VIEW_DETAILS = 'VIEW_DETAILS';
export const viewDetails = (media) => ({
  type: VIEW_DETAILS,
  media
});

export const CLOSE_DETAILS = 'CLOSE_DETAILS';
export const closeDetails = () => ({
  type: CLOSE_DETAILS
});

export const FETCH_TV_PAGE_SUCCESS = 'FETCH_TV_PAGE_SUCCESS';
export const fetchTVPageSuccess = (response) => ({
  type: FETCH_TV_PAGE_SUCCESS,
  response
});

export const FETCH_TV_PAGE_ERROR = 'FETCH_TV_PAGE_ERROR';
export const fetchTVPageError = (error) => ({
  type: FETCH_TV_PAGE_ERROR,
  error
});

export const FETCH_TV_DETAILS_SUCCESS = 'FETCH_TV_DETAILS_SUCCESS';
export const fetchTVDetailsSuccess = (response) => ({
  type: FETCH_TV_DETAILS_SUCCESS,
  response
});

export const FETCH_TV_DETAILS_ERROR = 'FETCH_TV_DETAILS_ERROR';
export const fetchTVDetailsError = (error) => ({
  type: FETCH_TV_DETAILS_ERROR,
  error
});

// async actions for rex
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

export const fetchTVShowDetails = (request) => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/tv/details`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(data => dispatch(fetchTVDetailsSuccess(data)))
    .catch(err => dispatch(fetchTVDetailsError(err)))
    
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

export const fetchNowPlayingMovies = () => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/nowplaying`)
    .then(res => res.json())
    .then(data => dispatch(fetchCurrentlyPlayingSuccess(data)))
    .catch(err => dispatch(fetchCurrentlyPlayingError(err)))
  }
}

export const fetchAiringTodayTV = () => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/airingtoday`)
    .then(res => res.json())
    .then(data => dispatch(fetchAiringTodaySuccess(data)))
    .catch(err => dispatch(fetchAiringTodayError(err)))
  }
}

export const fetchOnTheAirTV = () => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/schedule`)
    .then(res => res.json())
    .then(data => dispatch(fetchOnTheAirSuccess(data)))
    .catch(err => dispatch(fetchOnTheAirError(err)))
  }
}

export const fetchTVPage = (request) => {
  return (dispatch, getState) => {
    dispatch(fetchMediaRequest());
    fetch(`${API_BASE_URL}/api/rex/changepage`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(data => dispatch(fetchTVPageSuccess(data)))
    .catch(err => dispatch(fetchTVPageError(err)))
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