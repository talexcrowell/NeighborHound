import {combineReducers} from 'redux';
import newsReducer from './news';
import communityReducer from './community';
import rexReducer from './rex';
import mainReducer from './main';

const rootReducer = combineReducers({
  main: mainReducer,
  news: newsReducer,
  community: communityReducer,
  rex: rexReducer
});

export default rootReducer;