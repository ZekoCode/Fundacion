import React,{useContext,useEffect} from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import VisionAlumno from './components/organisms/visionAlumno/VisionAlumno'
import VisionCurso from './components/organisms/visionCurso/VisionCurso'
import VisionProfesor from './components/organisms/visionProfesor/VisionProfesor'

import LoginSection from './components/pages/loginSection/LoginSection'
import TeacherDashboard from './components/pages/teacherDashboard/TeacherDashboard'
// import StudentsList from './components/pages/studentsList/StudentsList'

import SessionContext from './context/session/SessionContext'

function App() {
  const {isLogin,state}=useContext(SessionContext)
  
  useEffect(()=>{
    isLogin()
  },[])

  return (
    <BrowserRouter>
        <Routes> 

          {
            !state.isAuthenticated&&(
              <>
                <Route path="/login" element={<LoginSection/>} />
                <Route path="/maestro" element={<Navigate to="/login" replace/>} />
                {/* <Route path="/administrador" element={<Navigate to="/login" replace/>} /> */} //this route component's administrator
              </>
            )
          }

          {
            (state.isAuthenticated&&state.user.rol==='profesor')&&(
              <Route path="/login" element={<Navigate to="/maestro" replace/>} />
            )
          }

          {/* {
            (state.isAuthenticated&&state.user.rol==='administrador')&&(
              <Route path="/login" element={<Navigate to="/curso" replace/>} />
            )
          } */}

          {
            (state.isAuthenticated&&state.user.rol==='profesor')&&(
              <Route path="/maestro" element={<TeacherDashboard/>}/>
            )
          }



          <Route path="/alumnos" element={<VisionAlumno/>}/>
          {/* <Route path="*" element={<h1>Rout not found</h1>} /> */}

          <Route path="/profe" element={<VisionProfesor/>}/>   

        </Routes>
    </BrowserRouter> 
  )
}

export default App