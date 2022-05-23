import React,{useContext, useEffect} from 'react';
import './styles.css'

import ProfesorContext from '../../../context/profesor/ProfesorContext';
import SessionContext from '../../../context/session/SessionContext';
import ListaCursosProfesor from '../../molecules/listaCursosProfesor/ListaCursosProfesor';
import TitleCourse from '../../atoms/titleCourse/TitleCourse';
import TableNotes from '../tableNotes/TableNotes';

function VisionCurso() {

  // const {state}=useContext(SessionContext)
  const {getCalificaciones,stateProfesor}=useContext(ProfesorContext)

  useEffect(()=>{
    getCalificaciones()
  },[])

    return(
      <div className='contenedor--main'>
        <ListaCursosProfesor/>
        {stateProfesor.currentCourse.materia?
          (<div className="contenido-visionCurso-Profesor">
          <TitleCourse titleText={`${stateProfesor.currentCourse.materia} - ${stateProfesor.currentCourse.curso}`}/>
          <TableNotes/>
          </div>):(<div className="contenido"></div>)
        }
      </div>
  )
}

export default VisionCurso