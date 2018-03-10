import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import Board from './Board';
import '../../index.css';

export default class Game extends PureComponent {

  render() {

    return (
      <section className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
        </div>
      </section>
    );
  }
}

// export default connect(
//   ()
// )