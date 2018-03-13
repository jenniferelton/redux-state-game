import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Square from './square';
import '../../index.css';
import { takeTurns, reset } from './actions';

class Board extends PureComponent {

  handleClick(id) {
    this.props.takeTurns(id);
  }

  handleReset() {
    this.props.reset();
  }

  renderSquare(id) {
    return (
      <Square value={this.props.squares[id]}
        index={id}
        onClick={() => this.handleClick(id)}/>
    );
  }

  render() {
    
    const winResult = (this.props.winner !== 'no winner')
      ? <section><span>{this.props.winner} is the winner!</span></section>
      : null;
    return (
      <section>
        <div className="status">{winResult}</div>
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
          <button className="button" onClick={() => this.handleReset()}>RESET</button>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    squares: state.game.squares,
    winner: state.game.winner,
    xWins: state.game.xWins,
    oWins: state.game.oWins,
    activePlayer: state.game.activePlayer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    takeTurns(id) {
      dispatch(takeTurns(id));
    },
    reset() {
      dispatch(reset());
    }
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(Board);