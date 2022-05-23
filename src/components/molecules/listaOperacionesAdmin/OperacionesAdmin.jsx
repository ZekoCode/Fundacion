import React,{useContext} from 'react'
import Selector from '../../atoms/selectorCursos/Selector';
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './style.css'
import LogoutButton from '../../atoms/logoutButton/LogoutButton';
import ButtonActionAdmin from '../../atoms/buttonActionAdmin/ButtonActionAdmin';
import {v4}from 'uuid'

function OperacionesAdmin() {

  return (
    <div className="actionsAdminContainer">
    <SubtitleForm text='Lista de cursos'/>
        <div className='actionsAdminContainer--menu'>
          <ButtonActionAdmin text='Estudiantes' />
          <ButtonActionAdmin text='Profesores' />
          <ButtonActionAdmin text='Materias' />
          <ButtonActionAdmin text='Cursos' />
          <ButtonActionAdmin text='Calificaciones' />
          <ButtonActionAdmin text='Configuracion' />
        </div>
        <LogoutButton/>
    </div>
  )
}

export default OperacionesAdmin