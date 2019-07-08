import React from 'react';
import './App.css';

class CountView extends React.Component {
  reder() {
    return (
      <div className="count"></div>
    )
  }
}

class FormInput extends React.Component {
  reder() {
    return (
      <input class="form-control" type="text" id="input_num" placeholder="Enter number">
    )
  }
}

class Btn extends React.Component {
  render() {
    return (
      <button type="button" class="btn btn-primary" id="btn_increment" title="plus">+</button>
      <button type="button" class="btn btn-danger" id="btn_decrement" title="minus">-</button>
      <button type="button" class="btn btn-outline-secondary" id="btn_reset">reset</button>
    )
  }
}



function App() {
  return (
    <div>
      sss
    </div>
  );
}

export default App;
