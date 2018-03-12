import React, { PureComponent } from 'react';

class Status extends PureComponent {
  render() {
    return (
      <div className="Status Message">{ this.props.message }</div>
    );
  }
}

export default Status;






















// import Square from './square';
// import { connect } from 'react-redux';

// import '../../index.css';

// export default class Board extends PureComponent {

//   renderSquare(i) {
//     return (
//       <Square value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}/>
//     );
//   }

//   render() {
//     return (
//       <section className="container">
//         <div className="status">{status}</div>
//         <div className="board-row1">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row2">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row3">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </section>
//     );
//   }
// }