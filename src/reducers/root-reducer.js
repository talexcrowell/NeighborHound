import {combineReducers} from 'redux';
import newsReducer from './news';
import communityReducer from './community';

const rootReducer = combineReducers({
  news: newsReducer,
  community: communityReducer,
});

export default rootReducer;