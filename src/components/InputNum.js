import React, { Component } from 'react';

class InputNum extends Component {
  render() {
      const thisProps = this.props;
      return (
          <input className="form-control" type="text" value={thisProps.data} onChange={thisProps.onChange} placeholder="Enter number" />
      )
  }
}

export default InputNum