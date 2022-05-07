import React from 'react'
import './styles.css'

function Selector(matters) {
  return (
    <div className='selector--matter--container'>
        <select className="selector--matter__input">
            {
                matters.listaMaterias.map((matter)=>{
                    return(
                        <option className='selector--matter__input__option' key={matter.id_materia} value={matter.value}>{matter.nombre_materia}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default Selector