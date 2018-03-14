import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadMatch } from './actions';
import '../../index.css';

class GameHistory extends PureComponent {

  handleLoadMatch() {
    this.props.loadMatch();
  }

  render() {
    console.log(this.props);
    // const { games } = this.props;
    return (
      <section>
        <button className="button" onClick={() => this.handleLoadMatch()}>LOAD</button>
        <ul>
          <li>P1 Score: {this.props.xWins} ; P2 Score: </li>
        </ul>
      </section>
    );
  }
}

// render() {
//   const { articles } = this.props;

//   return (
//     <ul>
//       {articles.map((article, i) => (
//         <Article key={i} article={article}/>
//       ))}
//     </ul>
//   );
// }

function mapStateToProps(state) {
  return {
    xWins: state.game.xWins,
    oWins: state.game.oWins,
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