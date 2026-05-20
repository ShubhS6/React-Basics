import { useState } from 'react'
import './App.css'

function App() {
  const [counters,setCounters]=useState([{id:1,value:0}]);
  const addCounters=()=>{
    setCounters([...counters,{id:counters.length+1,value:0}])
  }
  return (
   <div>
      <button onClick={addCounters}>Add Counter</button>
      <ul>
        {counters.map((counter)=>(
          <li key={counter.id}>
            Counter {counter.id} :{counter.value}
            <button onClick={()=>setCounters(counters.map(c=>c.id==counter.id?{...c,value:c.value+1}:c))}>Increment</button>
            </li>
        ))}
      </ul>
   </div>
  )
}

export default App
