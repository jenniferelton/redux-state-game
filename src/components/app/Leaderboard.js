import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadMatch } from './actions';
import '../../index.css';

class GameHistory extends PureComponent {

  handleLoadMatch() {
    this.props.loadMatch();
  }

  render() {
    let leaderBoard = this.props.response;
    let leaderBoardKeys = [];
    if(leaderBoard){
      leaderBoardKeys = Object.keys(leaderBoard);
    }
    return (
      <section>
        <ul>
          {leaderBoardKeys.length > 0 ? leaderBoardKeys.map((arb, i) => {
            return <li key={ i }>Player 1: {leaderBoard[arb].playerOneScore} | Player 2: {leaderBoard[arb].playerTwoScore}</li>;
          }) : null}
          <li>P1 Score: {this.props.xWins} ; P2 Score: </li>
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    response: state.game.response
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMatch() {
      dispatch(loadMatch());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // ({ matches }) => ({ matches }),
  // { loadMatch }
) (GameHistory);