const btnIncre = document.querySelector("#btn_increment");
const btnDecre = document.querySelector("#btn_decrement");
const btnReset = document.querySelector("#btn_reset");
const countArea = document.querySelector(".count");
const inputNum = document.querySelector("#input_num");

// START
function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function() {
  if(isNaN(inputNum.value)) return alert('숫자만 입력해주시기 바랍니다')
  inputNum.value ? this.count = this.count + Number(inputNum.value) : this.count = this.count + 1
};

Counter.prototype.decrement = function() {
  if(isNaN(inputNum.value)) return alert('숫자만 입력해주시기 바랍니다')
  inputNum.value ? this.count = this.count - Number(inputNum.value) : this.count = this.count - 1
};

Counter.prototype.reset = function() {
  this.count = 0;
};

Counter.prototype.getCount = function() {
  return this.count
};

const CounterApp = new Counter();
// END

const renderCount = function() {
  const getNum = CounterApp.getCount();
  countArea.innerHTML = getNum;
};

const handleIncrement = function() {
  CounterApp.increment();
  renderCount();
};

const handleDecrement = function() {
  CounterApp.decrement();
  renderCount();
};

const handleReset = function() {
  CounterApp.reset();
  renderCount();
};

btnIncre.addEventListener("click", handleIncrement);
btnDecre.addEventListener("click", handleDecrement);
btnReset.addEventListener("click", handleReset);

const init = function() {
  renderCount();
};

window.onload = function() {
  init();

};
