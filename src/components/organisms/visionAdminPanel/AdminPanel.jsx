import React,{useContext} from 'react';
import './styles.css'

import AdministradorContext from '../../../context/administrator/adminContext';
import SessionContext from '../../../context/session/SessionContext';
import OperacionesAdmin from '../../molecules/listaOperacionesAdmin/OperacionesAdmin';
import TitleCourse from '../../atoms/titleCourse/TitleCourse';
import RenderActionForm from '../renderActionForm/RenderActionForm';

function AdminPanel() {

  const {state}=useContext(SessionContext)
  const {stateAdministrador}=useContext(AdministradorContext)

    return(
      <div className='contenedor--main'>
        <OperacionesAdmin/>
        {
          state.isAuthenticated&&state.user.rol==='administrador'?
            (
              <div className="contenido">
                <TitleCourse titleText={stateAdministrador.currentAction}/>
                <RenderActionForm/>
              </div>
            ):(
              <div className="contenido"></div>
            )
        }
      </div>
  )
}

export default AdminPanel