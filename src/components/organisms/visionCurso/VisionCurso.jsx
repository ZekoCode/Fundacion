import React,{useContext, useEffect} from 'react';
import './styles.css'

import ProfesorContext from '../../../context/profesor/ProfesorContext';
import SessionContext from '../../../context/session/SessionContext';
import ListaCursosProfesor from '../../molecules/listaCursosProfesor/ListaCursosProfesor';
import TitleCourse from '../../atoms/titleCourse/TitleCourse';
import TableNotes from '../tableNotes/TableNotes';

function VisionCurso() {

  const {state}=useContext(SessionContext)
  const {getCalificaciones}=useContext(ProfesorContext)
  

  useEffect(()=>{
    const credentials={token:state.token,rol:state.user.rol,cedula:parseInt(state.user.Cedula)}
    // console.log(credentials)
    getCalificaciones(credentials)
  },[])



    return(
      <div className='contenedor--main'>
        <ListaCursosProfesor/>
        <div className="contenido">
          <TitleCourse titleText='Matematicas - 2do BGU'/>
          <TableNotes/>
        </div>
      </div>
  )
}

export default VisionCurso