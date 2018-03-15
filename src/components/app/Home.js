import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends PureComponent {

  render() {

    return (
      <section className="home">
        <div>
          <h1>Home</h1>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Game">Game</Link></li>
          <li><Link to="/Leaderboard">Leaderboard</Link></li>
        </div>
      </section>
    );
  }
}

export default connect(
  null
)(Home);