import React from 'react'
import './style.css'
import AddStudentFrom from '../../molecules/addStudentForm/AddStudentFrom'
import AddTeacherFrom from '../../molecules/addTeacherForm/AddTeacherFrom'
import AddMatterFrom from '../../molecules/addMatterForm/AddMatterFrom'
import AddCourseFrom from '../../molecules/addCourseForm/AddCourseFrom'
import { useContext } from 'react'
import AdministradorContext from '../../../context/administrator/adminContext'

function RenderActionForm() {

   const {stateAdministrador}=useContext(AdministradorContext)

  return (<>
      {
         stateAdministrador.currentAction==='Estudiantes'?
            (<AddStudentFrom/>):
         stateAdministrador.currentAction==='Profesores'?
            (<AddTeacherFrom/>):
         stateAdministrador.currentAction==='Materias'?
            (<AddMatterFrom/>):
         stateAdministrador.currentAction==='Cursos'?
            (<AddCourseFrom/>):(<></>)
      }
     {/* <AddStudentFrom/> 
     <AddTeacherFrom/>
   <AddMatterFrom/>
   <AddCourseFrom/> */}
     </>
     
  )
}

export default RenderActionForm