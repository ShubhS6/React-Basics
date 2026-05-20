import './App.css'
import { useState } from 'react'

function App() {
  const [formData,setFormData]=useState({
    text:'',
    checkbox:false,
    radio:'',
    select:''
  });

  const handleChange=(e)=>{

  }
  return (
   <div className='form-container'>
      <h1>Form Example</h1>
      <form>
        {/* text input */}
        <div className='form-field'>
          <label>Text:</label>
          <input type='text' name='text' value={formData.text} onChange={handleChange}>
          </input>
        </div>
        {/* check Box */}
        <div className='form-field'>
          <label>CheckBox:</label>
          <input type='checkbox' name='checkbo' > </input>
          {/* checked={formData.checkbox} onChange={handleChange} */}
        </div>
      </form>
   </div>
  )
}

export default App
