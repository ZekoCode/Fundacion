import React from 'react'
import './style.css'

function InputConductStudentTable() {

  const [valueConduct, setValue] = React.useState("-")

  const handleChange = (event) => {
    const value=event.target.value
    // setValue(value)
    if(/^([a-fA-ABCDEF\-\.])+$/.test(value)){
      setValue(value.toUpperCase())
    }
  }

  return (
    <td className='professorNotes--table--row__conductStudent__inputContainer'>
        <input className='professorNotes--table--row__conductStudent__inputContainer__input' 
        type="text"
        value={valueConduct}
        onKeyPress={(e) => {
          if(/^([a-fA-ABCDEF\-])+$/.test(e.key)){
            // e.preventDefault()
            setValue(e.key.toUpperCase())
          }
        }}
        onChange={(e)=>{
          // handleChange(e)
        }}
        />
    </td>
  )
}

export default InputConductStudentTable