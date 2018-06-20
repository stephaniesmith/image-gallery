import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import promiseMiddleware from './promise-middleware';
import { albums, album, images } from '../components/albums/reducers';

const rootReducer = combineReducers({
  albums,
  album,
  images
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      //promiseMiddleware
    )
  )
);

export default store;