import React from 'react'
import { useContext } from 'react'
import AdministradorContext from '../../../context/administrator/adminContext'
import './styles.css'

function ButtonActionAdmin({text}) {

    const {setCurrentAction}=useContext(AdministradorContext)
   
    return (
      <div className='control--actionAdmin'>   
          <button className='control--actionAdmin__button' onClick={()=>{
            setCurrentAction(text)
          }}>{text}</button>
      </div>
    )
  }

export default ButtonActionAdmin