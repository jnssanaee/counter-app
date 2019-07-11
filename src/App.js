import React, { Component } from 'react';
import { CounterView, BtnGroup, InputNum } from "./components/index";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      number: ''
    };
  }

  increment = () => {
    this.setState(({ count }) => ({ // count: this.state.count + 1 과 선언 시 'this.state'를 또 조회한다.
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
    const thisState = this.state;
    return (
      <div>
        <CounterView data={thisState.count} />
        <InputNum data={thisState.number} onChange={this.handleChange} />
        <BtnGroup increment={this.increment} decrement={this.decrement} reset={this.reset} />
      </div>
    );
  }
}

export default App;
