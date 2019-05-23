import { API_BASE_URL } from '../config';
import { login } from './auth';

//Sync
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST
});

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const registerUserError = (err) => ({
  type: REGISTER_USER_ERROR,
  err
});

//sends post request to server with user submitted information
export const registerUser = user => {
  return (dispatch) => {
    dispatch(registerUserRequest());
    fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(()=> dispatch(login(user.username, user.password)))
    .catch(err => dispatch(registerUserError(err)));
  };
};