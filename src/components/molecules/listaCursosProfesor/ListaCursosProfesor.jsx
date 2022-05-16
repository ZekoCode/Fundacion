import React,{useContext} from 'react'
import Selector from '../../atoms/selectorCursos/Selector';
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './style.css'
import LogoutButton from '../../atoms/logoutButton/LogoutButton';
import ProfesorContext from '../../../context/profesor/ProfesorContext';
import {v4}from 'uuid'

function ListaCursosProfesor() {
  const {stateProfesor}=useContext(ProfesorContext)

  return (
    <div className="listCoursProfesor">
    <SubtitleForm text='Lista de cursos'/>
        <div className='listCoursProfesor__itemsContainer'>
            {
                stateProfesor.cursosConMaterias.map((item)=>{
                  return(
                  <Selector key={v4()} id={v4()} matters={item}/>
                  )
                })
            }
        </div>
        <LogoutButton/>
    </div>
  )
}

export default ListaCursosProfesor