import {combineReducers} from 'redux';
import newsReducer from './news';
import communityReducer from './community';
import rexReducer from './rex';
import mainReducer from './main';
import userReducer from'./user';
import authReducer from './auth';

const rootReducer = combineReducers({
  main: mainReducer,
  news: newsReducer,
  community: communityReducer,
  rex: rexReducer,
  user: userReducer,
  auth: authReducer
});

export default rootReducer;