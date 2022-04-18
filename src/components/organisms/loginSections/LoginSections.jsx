import React from 'react'
import ImageForm from '../../atoms/imageForm/ImageForm'
import LoginForm from '../../molecules/loginForm/LoginForm'
import './styles.css'

function LoginSections() {
    const imgUrl='http://www.eina.org.ec/wp-content/uploads/2017/03/cropped-icon-192x192.png'

  return (
    <div className='login--container'>
        <ImageForm url={imgUrl} alt='Icono'/>
        <LoginForm/>
        <br/>
    </div>

  )
}

export default LoginSections