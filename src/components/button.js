import React, { PureComponent } from 'react';


class Button extends PureComponent {
  render() {
    return (
      <div className="button1" onClick={this.props.onClick} >{ this.props.label }</div>
    );
  }
}

export default Button;