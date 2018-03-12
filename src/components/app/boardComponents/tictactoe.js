import React, { PureComponent } from 'react';
import Square from '../components/Square';
import Button from '../components/Button';
import Status from '../components/Status';

class TicTacToe extends PureComponent {
  render () {
    const game = this;
    return (
      <div>
        <Status message={this.props.message}/>
        <div className="grid">
          {this.props.squares.map((value, square) => (
            <Square key={square} state={value} onClick={(event) => {
              game.props.onSetSquare(square, this.props.squares, this.props.player)
            }}/>
          ))}
        </div>
        <div className="panel">
        <Button label="Reset" onClick={(event) => {
          game.props.onReset()
        }/>
        </div>
      </div>
    )
  }
}
export default TicTacToe