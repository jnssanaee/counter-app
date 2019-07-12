import React, { Component } from 'react';
import { CounterView, BtnGroup, InputNum } from "./components"; // ./components/index => ./components/  (index 생략가능)
import './App.css';

class App extends Component {
  constructor(props) { // constructor 메서드는 초기 속성값이 상태값을 만들 경우 사용 (대표적인 예)
    super(props); // super함수를 호출하지 않으 시, 클래스의 constructor가 제대로 동작하지 않음
    this.state = { // 클래스 방식 사용 시 constructor 메서드를 사용하지 않고도 초기 속성값으로부터 속성값 정의 가능
      count: 0, // constructor 메서드 내 setState 메서드 호출은 하지말자 (setState는 컴포넌트 마운트 이후 유효하기에 선언해도 무시됨)
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

  handleChange = ({ target }) => {
    const diffValue = target.value;
    if (isNaN(diffValue)) return alert('숫자만 입력해주시기 바랍니다')
    this.setState({
      number: parseInt(diffValue)
    })
  }

  render() {
    const { count, number } = this.state;
    return (
      <div>
        <CounterView count={count} />
        <InputNum number={number} onChange={this.handleChange} />
        <BtnGroup btnCLass="btn btn-primary" title="plus" clickName={this.increment}>+</BtnGroup>
        <BtnGroup btnCLass="btn btn-danger" title="minus" clickName={this.decrement}>-</BtnGroup>
        <BtnGroup btnCLass="btn btn-outline-secondary" clickName={this.reset}>reset</BtnGroup>
      </div>
    );
  }
}

export default App;
