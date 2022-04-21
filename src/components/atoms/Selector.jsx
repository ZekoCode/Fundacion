import React from 'react'
import {v4} from 'uuid'

function Selector({listaMaterias}) {
  return (
    <select id='seleccion'>
        {
            listaMaterias.map((nombre, value)=>{
                return <option id={v4()} value={value}>{nombre}</option>
            })
        }
    </select>
  )
}

export default Selector