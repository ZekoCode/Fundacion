import React from 'react'
import './styles.css'

function Button({buttonsesion}) {
  return (
    <div className='form__control'>
        {   
         <button className='btn--submit' type='submit'>{buttonsesion}</button>   
        }
    </div>
  )
}

export default Button