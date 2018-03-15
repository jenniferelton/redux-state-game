import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Game from './Game';

class App extends PureComponent {

  render() {

    return (
      <section className="home">
        <div>
          <h1>home</h1>
        </div>
        <div>
          <Game />
        </div>
      </section>
    );
  }
}

export default connect(
  null
)(App);