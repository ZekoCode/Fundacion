import React,{useContext,useEffect} from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import VisionCurso from './components/organisms/visionCurso/VisionCurso'

import LoginSection from './components/pages/loginSection/LoginSection'
// import StudentsList from './components/pages/studentsList/StudentsList'

import SessionContext from './context/session/SessionContext'

function App() {
  const {isLogin,state}=useContext(SessionContext)
  
  useEffect(()=>{
    isLogin()
  },[state])

  return (
    <BrowserRouter>
        <Routes> 

          {
            !state.isAuthenticated&&(
              <Route path="/login" element={<LoginSection/>} />
            )
          }

          {
           (state.isAuthenticated&&state.user.rol==='administrador')&&(
              <Route path="/curso" element={<VisionCurso/>} />
            )
          }
          {/* <Route path="*" element={<h1>Rout not found</h1>} /> */}

        </Routes>
    </BrowserRouter> 
  )
}

export default App