import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

//import storyReducer from '../reducers/story';
import rootReducer from '../reducers';

const logger = createLogger();

const store = createStore(
  //storyReducer,
  rootReducer,
  undefined,
  applyMiddleware(logger)
);

export default store;