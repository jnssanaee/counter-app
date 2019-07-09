import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <div>
        <div className="count">{this.state.count}</div>
        <input className="form-control" type="text" id="input_num" placeholder="Enter number" />
        <div>
          <button type="button" className="btn btn-primary" onClick={this.increment} title="plus">
            +
          </button>
          <button type="button" className="btn btn-danger" onClick={this.decrement} title="minus">
            -
          </button>
          <button type="button" className="btn btn-outline-secondary" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
