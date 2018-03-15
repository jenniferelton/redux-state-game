import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Home extends PureComponent {

  render() {

    return (
      <section className="home">
        <div>
          <h1>home</h1>
        </div>
      </section>
    );
  }
}

export default connect(
  null
)(Home);