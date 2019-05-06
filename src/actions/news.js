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

export const REMOVE_ARTICLE_FROM_FEED= 'REMOVE_ARTICLE_FROM_FEED';
export const removeArticleFromFeed = (id) => ({
  type: REMOVE_ARTICLE_FROM_FEED,
  id
});

export const fetchNews = () => {
  return (dispatch, getState) => {
    dispatch(fetchNewsRequest());
    fetch(`${API_BASE_URL}/api/news/main`,{
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

// export const FETCH_ANIMENEWS_SUCCESS = 'FETCH_ANIMENEWS_SUCCESS';
// export const fetchAnimeNewsSuccess = (news) => ({
//   type: FETCH_ANIMENEWS_SUCCESS,
//   news
// });

// export const FETCH_CYBERSECURITYNEWS_SUCCESS = 'FETCH_CYBERSECURITYNEWS_SUCCESS';
// export const fetchCyberSecurityNewsSuccess = (news) => ({
//   type: FETCH_CYBERSECURITYNEWS_SUCCESS,
//   news
// });

// export const fetchAnimeNews = () => {
//   return (dispatch, getState) => {
//     dispatch(fetchNewsRequest());
//     fetch('https://kitsu.io/api/edge/trending/anime',{
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-type': 'application/vnd.api+json'
//       }
//     })
//     .then(res => res.json())
//     .then(data => dispatch(fetchAnimeNewsSuccess(data)))
//     .catch(err => dispatch(fetchNewsError(err)))
//   }
// }
	
// export const fetchCyberSecurityNews = () => {
//   return (dispatch, getState) => {
//     dispatch(fetchNewsRequest());
//     fetch('http://cybersecurity.apievangelist.com/apis/news')
//     .then(res => res.json())
//     .then(data => dispatch(fetchCyberSecurityNewsSuccess(data)))
//     .catch(err => dispatch(fetchNewsError(err)))
//   }
// }
