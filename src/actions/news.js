

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST
});

export const FETCH_ANIMENEWS_SUCCESS = 'FETCH_ANIMENEWS_SUCCESS';
export const fetchAnimeNewsSuccess = (news) => ({
  type: FETCH_ANIMENEWS_SUCCESS,
  news
});

export const FETCH_CYBERSECURITYNEWS_SUCCESS = 'FETCH_CYBERSECURITYNEWS_SUCCESS';
export const fetchCyberSecurityNewsSuccess = (news) => ({
  type: FETCH_CYBERSECURITYNEWS_SUCCESS,
  news
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

export const fetchNews = () => {
  return (dispatch, getState) => {
    dispatch(fetchNewsRequest());
    fetch('https://api.overwatchleague.com/news',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/vnd.api+json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(fetchNewsSuccess(data)))
    .catch(err => dispatch(fetchNewsError(err)))
  }
}

export const fetchAnimeNews = () => {
  return (dispatch, getState) => {
    dispatch(fetchNewsRequest());
    fetch('https://kitsu.io/api/edge/trending/anime',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/vnd.api+json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(fetchAnimeNewsSuccess(data)))
    .catch(err => dispatch(fetchNewsError(err)))
  }
}
	
export const fetchCyberSecurityNews = () => {
  return (dispatch, getState) => {
    dispatch(fetchNewsRequest());
    fetch('http://cybersecurity.apievangelist.com/apis/news',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(fetchCyberSecurityNewsSuccess(data)))
    .catch(err => dispatch(fetchNewsError(err)))
  }
}