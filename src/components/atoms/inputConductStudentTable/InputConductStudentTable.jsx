import React,{useContext,useState} from 'react'
import ProfesorContext from '../../../context/profesor/ProfesorContext'
import './style.css'

function InputConductStudentTable({identifyConduct,conduct,action}) {
  const {updateNote}=useContext(ProfesorContext)

  if(conduct==null){
    conduct=''
  }


  const conductInitialState={ 
    id:identifyConduct,
    score:0,
    action,
    conduct
  }

  const [valueConduct, setValue] = useState(conductInitialState)

  const handleChange = (value) => {
      setValue({
        ...valueConduct,
        conduct:value
      })
      // updateNote(valueConduct)
    // } 
  }

  const updateConduct=()=>{
    updateNote(valueConduct)
  }

  return (
    <td className='professorNotes--table--row__conductStudent__inputContainer'>
        <input className='professorNotes--table--row__conductStudent__inputContainer__input' 
        type="text"
        value={valueConduct.conduct}
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            updateConduct()
          }
          // if(/^([a-fA-ABCDEF\-])+$/.test(e.key)){
            // e.preventDefault()
            // setValue(e.key.toUpperCase())
            // handleChange(e.key.toUpperCase())
          }
        // }
      }
        onChange={(e)=>{
          const key=e.target.value
            if(/^([a-fA-ABCDEF\-])+$/.test(key)){
              // console.log(key.toUpperCase())
              handleChange((e.target.value).toUpperCase())
            }
        }}
        />
    </td>
  )

}

export default InputConductStudentTable