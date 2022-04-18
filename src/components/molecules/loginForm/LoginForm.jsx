import React from 'react'
import TitleForm from '../../atoms/titleForm/TitleForm'
import './styles.css'


function LoginForm() {
  return (
    <form className='form--form'>
        <TitleForm text='Iniciar Sesion'/>       
        <br/>
        <br/>
        <div className='controls'>
          <i class="bi bi-envelope-fill"></i>
          <input className="control--form" 
            type="cedula" 
            name="cedula" 
            id="cedula" 
            placeholder="Ingrese su cedula..."
          />
        </div>
        
        <div className='controls'>
          <i class="bi bi-lock-fill"></i>
          <input 
            className="" 
            type="password" 
            name="contraseña" 
            id="contraseña" 
            placeholder="Ingrese su contraseña..."
          />
        </div>
        <br/>
        <br/>
        <button className='btn--submit' type='submit'>Ingresar</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    
        <p className='link--p'> 
            <lable>Fundacion Eina @ Coryright 2022</lable>
        </p>
        
    </form>
  )
}

export default LoginForm