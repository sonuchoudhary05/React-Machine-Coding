import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { decrement, decrementByValue, increment, incrementByValue } from './Slice/CounterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
       {counter}
      </div>
      <div className='buttons'>
        <button onClick = {() => dispatch(increment())}>+</button>
        <button onClick = {() => dispatch(decrement())}>-</button>
        <button onClick = {() => dispatch(incrementByValue(2))}>IncrementBy2</button>
        <button onClick = {() => dispatch(decrementByValue(2))}>DecrementBy2</button>
      </div>
    </div>
  );
}

export default App;
