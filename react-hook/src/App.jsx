import './App.css'
import { useState } from 'react'
function App() {
  const [count,setCount]=useState(0);
  const [step,setStep]=useState(1);
  const handleCount=()=>{
    setCount(count-step);
  }
  const handleTwo=()=>{
    // setCount(count+1);
    // setCount(count+1);
    setCount(prevCount=>prevCount+1);
    setCount(prevCount=>prevCount+1);

  }
  return (
    <div className="app-container">
        <h1>Hello Lets Coount the Number</h1>
        <input type='number' value={step} onChange={(e)=>{
          console.log(e);
          setStep(parseInt(e.target.value));}}
          />
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+step)}>Add</button>
        {/* <button onClick={()=>handleCount(count)}>Subtract</button> */}
        {/* or */}
        <button onClick={handleCount}>Subtract</button>
        <button onClick={handleTwo}>+2</button>
    </div>
  )
}

export default App
