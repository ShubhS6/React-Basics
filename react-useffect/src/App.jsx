import { useEffect, useState } from 'react'
import './App.css'

// function App() {
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     console.log("useEffect Triggred");
//   },[count])
//   return (
//     <div>
//       <h1>Use Effect</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//   )
// }


function App() {
  const [mousePosition,setMousePosition]=useState({X:0,Y:0});

  useEffect(()=>{
    const handleMouse=(event)=>{
      setMousePosition({X: event.clientX,Y:event.clientY })
    };
    window.addEventListener('mousemove',handleMouse);
  },[])
  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X: {mousePosition.X} , Y: {mousePosition.Y}</p>
    </div>
  )
}

export default App
