import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyCapture = (e) => {
        if(e.keyCode === 13) {
            console.log(inputValue);
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

  return (

      <input type="text border"
             placeholder="Add Task"
             onKeyUpCapture={ handleKeyCapture }
             className='form-control m-2'
             onChange={handleInputChange}
             name='todo' />

  )
}

export default Form
