import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputValue: null,
    };
  }

  increment = () => {
    this.setState(({ count }) => ({
      // count: this.state.count + 1 과 선언 시 'this.state'를 또 조회한다.
      count: count + 1,
    }));
  };
  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };
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
