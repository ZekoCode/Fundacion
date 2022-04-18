// import React, { useContext, useEffect } from 'react'
// import SessionContext from '../../../context/session/SessionContext'
import ImageForm from '../../atoms/imageForm/ImageForm'
import LoginForm from '../../molecules/loginForm/LoginForm'
import './styles.css'


function LoginSections() {
    const imgUrl='http://www.eina.org.ec/wp-content/uploads/2017/03/cropped-icon-192x192.png'

  // const {login}=useContext(SessionContext)
  // useEffect(()=>{ 
  //   login() 
  // })

  return (
    <div className='login--container'>
        <ImageForm url={imgUrl} alt='Icono'/>
        <LoginForm/>
        <br/>
    </div>
  )
}

export default LoginSections