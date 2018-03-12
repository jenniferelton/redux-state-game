import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import StateTicTacToe from  './container/stateTicTac';
import { Provider } from 'react-redux';

require('./main.css');

ReactDOM.render( 
  <Provider store={store}>
    <StateTicTacToe/>,
  </Provider>,
  document.getElementById('root')
);