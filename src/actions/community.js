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

function normalize(htmlBlock){
  let imgRegex = /<a href="https:\/\/i.redd.*(.jpg"|.png")>/g;
  let img;
  let found = imgRegex.exec(htmlBlock);
  if(found !== null){
    img = found[0];
  } else {
    console.log('Miss >>>' + htmlBlock);
    img = 'https://i.imgur.com/3xw03XE.png';
  }
  return img.replace('<a href="', '').replace('">', '')
}

export const fetchCommunity = () => {
  return (dispatch, getState) => {
    dispatch(fetchCommunityRequest());
    fetch(`${API_BASE_URL}/api/community/all`)
    .then(res => res.json())
    .then(data => dispatch(fetchCommunitySuccess(data)))
    .catch(err => dispatch(fetchCommunityError(err)))
  }
}