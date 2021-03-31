import { combineReducers } from 'redux';

import userLocationReducer from './userLocationReducer';

const rootReducer = combineReducers({
  userLocation: userLocationReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
