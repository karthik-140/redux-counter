import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch({type: 'incrementBy5'});
  }
  const decrementHandler = () =>{
    dispatch({type: 'decrementBy5'});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
