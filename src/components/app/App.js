import React, { PureComponent } from 'react';
import Board from './Board';

export default class App extends PureComponent {

  render() {

    return (
      <section className="game">
        <div className="game-board">
          <Board/>
        </div>
       
      </section>
    );
  }
}



