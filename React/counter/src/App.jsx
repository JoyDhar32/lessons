import './App.css';
import {useState, React} from 'react';

function App() {
let [counter, setCounter]= useState(10) // [state, setState
  let addValue= ()=>{ setCounter(counter=>counter+1) 
  
    setCounter(counter=>counter+1)}
  return (
    <div className="App">
      <h1>React App</h1>
<button onClick={()=>{setCounter(counter=>counter-1)}}>Subtract(-)</button>

<h2>Counter Value: {counter}</h2>
<button onClick={addValue}>Add</button> &nbsp;

    </div>
  );
}

export default App;
