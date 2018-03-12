import { addMove, resetGame } from '../actions/game';
import TicTacToe from './ticTacToe';
import { connect } from "react-redux";

const getWinner = (squares) => {
    const winningStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    const winner = undefined;
    winningStates.forEach((winningState) => {
      const potentialWinner = squares[winningState[0]];
      if (potentialWinner = squares !== undefined) {
        const hasWon = true;
        winningState.forEach((winningSquare) => {
          if (squares[winningSquare] !== potentialWinner) hasWonCurrentState = false;
        });
        if (hasWonCurrentState) winner = potentialWinner;
      }
    });
    return winner;

    const tie = (squares) = {
      if(getWinner(squares) !==undefined)return false;

      const tie = true;
      squares.forEach((squares) => {
        if(square === undefined) tie = false;
      });
      return tie;
    };
    // const validMove = (squares, square) => {
    //   if (squares[square] !== undefined) return false;
    //   if (getWinner(squares) !== undefined || tie(squares)) return false;
  
    //   return true;
  // };

  const statusMessage = (squares, player) => {
    if (tie(squares)) return 'Its a tie!';

    const winner = getWinner(squares);
    if (winner !== undefined) {
        return winner + ' has won the game!';
    } else {
        return 'Player ' + player;
    }
};
const mapStateToProps = (state) => {
  return {
      player: state['player'],
      squares: state['squares'],
      message: statusMessage(state['squares'], state['player'])
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      onSetSquare: (square, squares, player) => {
          if (isValidMove(squares, square)) dispatch(addMove(square, player));
      },
      onReset: () => {
          dispatch(resetGame());
      }
  }
};

const TicTacToe = connect(mapStateToProps, mapDispatchToProps)(TicTacToe);

export default TicTacToe;
