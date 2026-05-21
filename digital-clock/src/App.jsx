import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [time,setTime]=useState(new Date());

  useEffect(()=>{
    const timer=setInterval(()=>setTime(new Date()),1000);
    return ()=>clearInterval(timer);
  },[])
  return (
  <div>
    <h1>Today Time</h1>
    {time.toLocaleTimeString()}
  </div>
  )
}

export default App
