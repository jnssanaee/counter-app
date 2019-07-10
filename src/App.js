import React, { Component } from 'react';
import { CounterView, BtnGroup } from "./components/index";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      number: ''
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment = () => {
    this.setState(({ count }) => ({ // count: this.state.count + 1 과 선언 시 'this.state'를 또 조회한다.
      //count: count + 1,  
      count: this.state.number ? count + this.state.number : count + 1
    }));
  };

  decrement = () => {
    this.setState(({ count }) => ({
      count: this.state.number ? count - this.state.number : count - 1
    }));
  };

  reset = () => this.setState({ count: 0 });

  handleChange = (e) => {
    if (isNaN(e.target.value)) return alert('숫자만 입력해주시기 바랍니다')
    this.setState({
      number: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <CounterView data={this.state.count} />
        <input className="form-control" type="text" id="input_num" value={this.state.number} onChange={this.handleChange} placeholder="Enter number" />
        <BtnGroup increment={this.increment} decrement={this.decrement} reset={this.reset} />
      </div>
    );
  }
}

export default App;
