import React,{useContext} from 'react'
import './styles.css'
import SessionContext from '../../../context/session/SessionContext'
import {useNavigate} from 'react-router-dom'

function LogoutButton() {
  const navigator=useNavigate()

  const {logout}=useContext(SessionContext)

    return (
      <div className='control-btn'>   
          <button className='control-btn__button' type='button' onClick={()=>{
            logout()
            navigator('/login')
          }}>Cerrar Sesion</button>
      </div>
    )
  }

export default LogoutButton