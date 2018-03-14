import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadMatches } from '/actions';

class GameHistory extends PureComponent {

  render() {
    return (
      <section>
        <ul>
          <li key={match.key}>Score: {match.score}; Games: {match.games}</li>
        </ul>
      </section>
    );
  }
}

export default connect(
  ({ matches }) => ({ matches }),
  { loadMatches }
) (GameHistory);