import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/app/Game';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render( 
  <Provider store={store}>
    <Game/>
  </Provider>,
  document.getElementById('root')
);