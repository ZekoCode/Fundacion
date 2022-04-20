import React from 'react'
import './styles.css'


function LoginForm() {

  return (
    <form className='form--form'>
        <h1 className="form--title">Iniciar Sesion</h1>     
        <div className='controls'>
          <i className="bi bi-envelope-fill"></i>
          <input className="control--form__input" 
            type="cedula" 
            name="cedula" 
            id="cedula"  
            placeholder="Ingrese su cedula..."
          />
        </div>
        <div className='controls'>
          <i className="bi bi-lock-fill"></i>
          <input 
            className="control--form__input" 
            type="password" 
            name="contraseña" 
            id="contraseña" 
            placeholder="Ingrese su contraseña..."
          />
        </div>

        <div className='entradas'>
 
          <input
            type="radio"
            name="entradas" 
            id="administrador" 
            value="administrador"
          />
				  <label className="label-radio administrador" htmlFor="administrador">Administrador</label>
      
				  <input
            type="radio" 
            name="entradas" 
            id="profesor" 
            value="profesor"
          />
				  <label className="label-radio profesor" htmlFor="profesor">Profesor</label>
				</div>
        <button className='btn--submit' type='submit'>Ingresar</button>
    </form>
  )
}

export default LoginForm