import React, { PureComponent } from 'react';


class Square extends PureComponent {
  render() {
    return (
      <div className="square" onClick={this.props.onClick}>{ this.props.state }</div>
    );
  }
}

export default Square;