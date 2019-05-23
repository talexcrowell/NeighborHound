import {REGISTER_USER_REQUEST, REGISTER_USER_ERROR} from '../actions/user';


const initialState = {
  loading: false,
  error: null
};

export default function userReducer(state=initialState, action){
  if(action.type === REGISTER_USER_REQUEST){
    return{
      ...state,
      loading: true
    }
  }
  else if(action.type === REGISTER_USER_ERROR){
    return{
      ...state,
      error: action.error
    }
  }
  return state;
}