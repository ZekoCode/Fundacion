import React from 'react'
import './styles.css'

function Selector({listaMaterias}) {
  return (
    <div className='form__control'>
        <select class="form__control--input">
            {
                listaMaterias.map((materia)=>{
                    return(
                        <option value={materia.value}>{materia.name}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default Selector