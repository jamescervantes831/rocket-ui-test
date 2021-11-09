import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';

const rootReducer = combineReducers({
  launchCollection
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
