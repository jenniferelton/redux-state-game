import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { player, squares } from './reducers/player';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  squares,
  player
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  composeEnhancers(
    applyMiddleware(
      thunk, 
      promiseMiddleware
    )
  )
);
  
export default store;