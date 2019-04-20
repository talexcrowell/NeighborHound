import {combineReducers} from 'redux';
import newsReducer from './news';
import communityReducer from './community';
import rexReducer from './rex';

const rootReducer = combineReducers({
  news: newsReducer,
  community: communityReducer,
  rex: rexReducer
});

export default rootReducer;