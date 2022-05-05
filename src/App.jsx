import React,{useContext,useEffect} from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import VisionAlumno from './components/organisms/visionAlumno/VisionAlumno'
import VisionCurso from './components/organisms/visionCurso/VisionCurso'

import LoginSection from './components/pages/loginSection/LoginSection'
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
                <Route path="/curso" element={<Navigate to="/login" replace/>} />
              </>
            )
          }

          {
            (state.isAuthenticated&&state.user.rol==='profesor')&&(
              <Route path="/login" element={<Navigate to="/curso" replace/>} />
            )
          }
          {/* {
            (state.isAuthenticated&&state.user.rol==='administrador')&&(
              <Route path="/login" element={<Navigate to="/curso" replace/>} />
            )
          } */}

          {
           (state.isAuthenticated&&state.user.rol==='profesor')&&(
              <Route path="/curso" element={<VisionCurso/>} />
            )
          }



          <Route path="/alumnos" element={<VisionAlumno/>}/>
          {/* <Route path="*" element={<h1>Rout not found</h1>} /> */}   

        </Routes>
    </BrowserRouter> 
  )
}

export default App