import React from 'react'
import SubtitleForm from '../atoms/subtitleForm/SubtitleForm'
import './styles.css'

function VisionCurso() {

    return(
        
    <form> 
      <div className="contenedor">
        
        <div className="menu">
          <br/><br/>
          <SubtitleForm text='Lista de cursos'/>
          <br/><br/><br/><br/><br/><br/>
          
          <div className='form__control'>
            <select class="form__control--input">
              <option value="">5to EGB</option>
            </select>
          </div>

          <div className='form__control'>
            <select class="form__control--input">
              <option value="">6to EGB</option>
            </select>
          </div>

          <div className='form__control'>
            <select class="form__control--input">
              <option value="">1ro BGU</option>
            </select>
          </div>

          <div className='form__control'>
            <select class="form__control--input">
              <option value="">2do BGU</option>
            </select>
          </div>

          <div className='form__control'>
            <select class="form__control--input">
              <option value="">3ro BGU</option>
            </select>
          </div>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <div className='form__control'>
            <button className='btn--submit' type='submit'>Cerrar sesion</button>
          </div>

        </div>


        <div className="contenido">
        
        </div>


        <div className="pie">
        <p>Fundacion Eina @ Copyright 2022</p>
        </div>
      </div>
    </form>
  )
}

export default VisionCurso