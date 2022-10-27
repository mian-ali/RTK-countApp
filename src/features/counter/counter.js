import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
function Count() {
  //   const [count, setCount] = React.useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        +
      </button>

      <div>Count:{count}</div>

      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        -
      </button>

      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}>
        increment 10 points
      </button>
    </div>
  );
}

export default Count;
