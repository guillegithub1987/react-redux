import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; 

import { counterActions } from '../store/counter'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatcher = useDispatch()

  const toggleCounterHandler = () => {
    dispatcher(counterActions.toggle())
  };

  const incrementHandler = () => {
    dispatcher(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatcher(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatcher(counterActions.increase({ amount: 5 }))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
