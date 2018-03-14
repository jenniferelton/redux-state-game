import React, { PureComponent } from 'react';
import Board from './Board';
import '../../index.css';
import { connect } from 'react-redux';
import GameHistory from './leaderboard';

class Game extends PureComponent {
  
  render() {

    return (
      <section className="game">
        <header>
          <h1> J&J Tic Tac Toe</h1>
        </header>
        <div className="container">
          <div className="game-board">
            <Board/>
          </div>
        </div>
        <div className="leaderboard">
          <GameHistory/>
        </div>
        <footer>
          <small>(c) Jacob & Jenny</small>
        </footer>
      </section>
    );
  }
}

export default connect (
  null
)(Game);