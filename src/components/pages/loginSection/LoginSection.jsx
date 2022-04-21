import React,{useEffect,useContext} from 'react'
import Footer from '../../atoms/footer/Footer'
import ImageForm from '../../atoms/imageForm/ImageForm'
import LoginForm from '../../molecules/loginForm/LoginForm'
import './styles.css'
import SessionContext from '../../../context/session/SessionContext'
import {Navigate} from 'react-router-dom'

function LoginSection() {
  const imgUrl='http://www.eina.org.ec/wp-content/uploads/2017/03/cropped-icon-192x192.png'

  const {isLogin,state}=useContext(SessionContext)

  useEffect(()=>{
    if(isLogin()){
      if(state.user.rol==='profesor'){
        console.log("profesor")
        Navigate(`/profesor/${state.user.id}`)
      }else if(state.user.rol==='adminisrator'){
          console.log("administrador")
      }
    }
  },[])

  return (
    <div className='login--page'>
       <div className='login--container'>
          <ImageForm url={imgUrl} alt='Icono'/>
          <LoginForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default LoginSection