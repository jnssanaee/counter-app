import React, { Component } from 'react';

class InputNum extends Component {

  render() {
      return (
          <input className="form-control" type="text" value={this.props.data} onChange={this.props.onChange} placeholder="Enter number" />
      )
  }
}

export default InputNum