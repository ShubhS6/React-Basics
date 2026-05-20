import { useState } from 'react'
import './App.css'

function App() {
  const [bgc,setbgc]=useState('#ffffff')

  const colors=['#ff0000','#564543','#Ade453'];

  const handleColor=(color)=>{
    setbgc(color);
  }
   return (
   <div style={{backgroundColor:bgc}}>
    <h1>Color Picker</h1>
    <div className='color-palette'>
      {colors.map((color,idx)=>(
        <div key={idx} style={{backgroundColor:color}}
         className='color-box' onClick={()=>handleColor(color)}>
        </div>
      ))}
      <input type='color' value={bgc} onChange={(e)=>handleColor(e.target.value)}></input>
    </div>
   </div>
  )
}

export default App
