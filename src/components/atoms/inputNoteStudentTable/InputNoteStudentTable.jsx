import React from 'react'
import './style.css'

function InputNoteStudentTable() {

  const [value, setValue] = React.useState(0.00)

  const handleChange = (event) => {
    const value=parseFloat(event.target.value)
    if(value<=10 && value>=0){
      setValue(value.toFixed(2))
    }
  }

  return (
    <td className='professorNotes--table--row__noteStudent__inputContainer'>
        <input className='professorNotes--table--row__noteStudent__inputContainer__input' 
        type="number" 
        step="0.05"
        min="0.00"
        max="10.00"
        value={value}
        onChange={(e)=>{
          handleChange(e)
        }}/>
    </td>
  )
}

export default InputNoteStudentTable