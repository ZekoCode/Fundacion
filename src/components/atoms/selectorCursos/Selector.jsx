import React,{useContext} from 'react'
import './styles.css'
import ProfesorContext from '../../../context/profesor/ProfesorContext'
import {v4} from 'uuid'

function Selector({matters}) {

const {currentMatter}=useContext(ProfesorContext)

const handleSelecteMatter=(e)=>{
    // let dropDown = document.getElementById(id);
    
    if (e.target.value!==matters.curso){
        currentMatter({
            curso:matters.curso,
            materia:e.target.value
        })
        // dropDown.selectedIndex = 0;
    }
}



  return (
    <div key={v4()} className='selector--matter--container'>
        <select id={v4()} onChange={(e)=>{handleSelecteMatter(e)}} className="selector--matter__input">
        <option defaultValue="" className='selector--matter__input__option'>{matters.curso}</option>
            {
                matters.materias.map((matter)=>{
                    return(
                        <option key={v4()} className='selector--matter__input__option' value={matter}>{matter}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default Selector