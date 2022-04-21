import React from 'react'
import './styles.css'

function NombreEstudiante({estudiante}) {
  return (
    <label className='form--estudia'>{estudiante}</label>
  )
}

export default NombreEstudiante