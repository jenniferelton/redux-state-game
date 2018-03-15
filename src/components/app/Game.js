import React, { PureComponent } from 'react';
import Board from './Board';
import '../../index.css';
import { connect } from 'react-redux';
import GameHistory from './leaderboard';
import { Route, IndexRoute, Link } from 'react-router';
import Home from './Home';

class Game extends PureComponent {
  
  render() {
    
    return (
      <section className="game">
        <header>
          <h1> J&J Tic Tac Toe</h1>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/game">Game</Link></li>
              <li><Link to="/leaderboard">leaderboard</Link></li>
            </ul>
          </div>
        </header>
        <div className="container">
          <div className="game-board">
            <Board/>
          </div>
        </div>
        <div className="leader">
          <GameHistory/>
        </div>
        <footer>
          <small>(c) Jacob & Jenny</small>
        </footer>
        <Route path="/" component={Home}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/game" component={Game}></Route>
          <Route path="/leaderboard" component={GameHistory}></Route>
        </Route>
      </section>
    );
  }
}


export default connect (
  null
)(Game);