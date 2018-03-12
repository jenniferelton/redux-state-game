import React, { PureComponent } from 'react';
import Square from '../components/square';
import Button from '../components/button';
import Status from '../components/status';

class TicTacToe extends PureComponent {
  render() {
    const game = this;
    return (
      <div>
        <Status message={this.props.message}/>
        <div className="grid">
          {this.props.squares.map((value, square) => (
            <Square key={square} state={value} onClick={() => {
              game.props.onSetSquare(square, this.props.squares, this.props.player);
            }}/>
          ))}
        </div>
        <div className="panel">
          <Button label="Reset" onClick={() => {
            game.props.onReset();
          }} />
        </div>
      </div>
    );
  }
}
export default TicTacToe;