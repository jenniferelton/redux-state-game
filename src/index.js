import React from 'react';
import ReactDOM from 'react-dom';
import Game from './app/Game';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';

ReactDOM.render( 
  <Provider store={store}>
    <Game/>,
  </Provider>,
  document.getElementById('root')
);