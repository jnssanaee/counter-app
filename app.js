//import { createStore } from 'redux';

const btnIncre = document.querySelector("#btn_increment");
const btnDecre = document.querySelector("#btn_decrement");
const btnReset = document.querySelector("#btn_reset");
const countArea = document.querySelector(".count");
const inputNum = document.querySelector("#input_num");

// 액션 타입 정의
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성함수 정의
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// 초깃값 설정
const initialState = {
  counter: 0
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      // 지원하지 않는 액션의 경우 상태 유지
      return state;
  }
}

// 스토어 만들기
const store = Redux.createStore(reducer);

// render 함수 만들기
const render = () => {
  const state = store.getState(); // 현재 상태를 가져옵니다.
  const { counter } = state; // 편의상 비구조화 할당
  countArea.innerText = '가';

};

render();

//  구독
store.subscribe(render);

// **** 이벤트 달아주기, 액션 발생 시키기

btnIncre.onclick = () => {
  store.dispatch(increment());
}

btnDecre.onclick = () => {
  store.dispatch(decrement());
}

alert(1)

// START
// function Counter() {
//   this.count = 0;
// }

// Counter.prototype.increment = function() {
//   if(isNaN(inputNum.value)) return alert('숫자만 입력해주시기 바랍니다')
//   inputNum.value ? this.count = this.count + Number(inputNum.value) : this.count = this.count + 1
// };

// Counter.prototype.decrement = function() {
//   if(isNaN(inputNum.value)) return alert('숫자만 입력해주시기 바랍니다')
//   inputNum.value ? this.count = this.count - Number(inputNum.value) : this.count = this.count - 1
// };

// Counter.prototype.reset = function() {
//   this.count = 0;
// };

// Counter.prototype.getCount = function() {
//   return this.count
// };

// const CounterApp = new Counter();
// // END

// const renderCount = function() {
//   const getNum = CounterApp.getCount();
//   countArea.innerHTML = getNum;
// };

// const handleIncrement = function() {
//   CounterApp.increment();
//   renderCount();
// };

// const handleDecrement = function() {
//   CounterApp.decrement();
//   renderCount();
// };

// const handleReset = function() {
//   CounterApp.reset();
//   renderCount();
// };

// btnIncre.addEventListener("click", handleIncrement);
// btnDecre.addEventListener("click", handleDecrement);
// btnReset.addEventListener("click", handleReset);

// const init = function() {
//   renderCount();
// };

// window.onload = function() {
//   init();

// };
