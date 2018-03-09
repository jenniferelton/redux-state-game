import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import './app.css';

export default class App extends PureComponent {

  render () {

    return (

      <section>
        <h1>Hello</h1>
        <section className="container">
          <div className="board">0</div>
          <div className="board">1</div>
          <div className="board">2</div>
          <div className="board">3</div>
          <div className="board">4</div>
          <div className="board">5</div>
          <div className="board">6</div>
          <div className="board">7</div>
          <div className="board">8</div> 
        </section>
      </section>
    );
  }
}



