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
      const {name,value,type,checked}=e.target;
      setFormData({...formData,
        [name]:type==='checkbox'?checked:value
  });
  };
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
          <label>CheckBox</label>
          <input type='checkbox' name='checkbox' checked={formData.checkbox} onChange={handleChange}/>
        </div>

        <div className='form-field'>
          <label>Radio</label>
          <label>
          <input type='radio' name='radio' value='option1' checked={formData.radio==='option1'} onChange={handleChange}/>
          Option 1
          </label>
          <label>
          <input type='radio' name='radio' value='option2' checked={formData.radio==='option2'} onChange={handleChange}/>
          Option 2
          </label>
        </div>

        <div className='form-field'>
          <label>Select:</label>
          <select name='select' value='formData.select' onChange={handleChange}>
          <option value="">choose an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          </select>
        </div>

        <div className='form-data'>
          <h3>form data</h3>
          <p>{formData.text || 'NA'}</p>
          <p>{formData.checkbox?'checked':'unchecked'}</p>
          <p>{formData.select || 'Na'}</p>
          <p>{formData.radio || 'Na'}</p>
        </div>
      </form>
   </div>
  )
}

export default App
