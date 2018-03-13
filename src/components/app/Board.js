import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Square from './square';
import '../../index.css';
import { takeTurns, reset } from './actions';

class Board extends PureComponent {

  handleClick(i) {
    this.props.takeTurns(i);
  } 

  handleReset() {
    this.props.reset();
  }

  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]}
        index={i}
        onClick={(y) => this.props.onClick(y)}/>
    );
  }

  render() {

    const winResult = (this.props.winner !== 'no winner')
      ? <section><span>{this.props.winner} is the winner</span>
        <button className="button" onClick={() => this.handleReset()}>RESET</button></section>
      : null;
    return (
      <section>
        <div className="status">{status}</div>
        <div className="game">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    squares: state.game.squares,
    winner: state.game.winner,
    xWins: state.games.xWins,
    oWins: state.games.oWins,
    activePlayer: state.games.activePlayer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    takeTurns(i) {
      dispatch(takeTurns(i));
    },
    reset(i) {
      dispatch(takeTurns(i));
    }
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(Board);