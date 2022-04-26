import React from 'react'
import './Styles.css'

function ButtonForm({sesion}) {
    return (
      <div className='form__control'>   
           
           <label className='btn--submit' >{sesion}</label>

      </div>
    )
  }

export default ButtonForm