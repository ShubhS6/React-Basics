import { useRef } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const myref=useRef("hello my world")
  const [stateCount,setStateCount]=useState(0);
  const refCount=useRef(0)
  const isc=()=>{
    setStateCount(stateCount+1);
  }
  const rc=()=>{
    refCount.current+=1;
  }
  return (
    <div>
        {myref.current}
        <br></br>
        {stateCount}
        <button onClick={isc}>Incremine state</button>
        <br></br>
        {refCount.current}
        <button onClick={rc}>Incremine ref</button>
    </div>
  )
}

export default App
