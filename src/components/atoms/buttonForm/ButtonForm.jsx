import React from 'react'
import './styles.css'

function ButtonForm({sesion}) {
    return (
      <div className='form__control--menu-cursos'>   
          <label className='btn--submit__menuCurso' >{sesion}</label>
      </div>
    )
  }

export default ButtonForm